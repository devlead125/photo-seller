import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import * as R from 'ramda';
import View from '../../components/View';
import TouchableOpacity from '../../components/TouchableOpacity';
import ChevronLeft from '../../icons/ChevronLeft';
import Adjust from '../../icons/Adjust';
import Card from '../../components/Card';
import Image from '../../components/Image';
import Button from '../../components/Button';

const imgs = [
  require('../../assets/1.png'),
  require('../../assets/2.png'),
  require('../../assets/1.png'),
  require('../../assets/2.png'),
  require('../../assets/1.png'),
  require('../../assets/2.png'),
  require('../../assets/1.png'),
  require('../../assets/2.png'),
  require('../../assets/1.png'),
  require('../../assets/2.png'),
  require('../../assets/1.png'),
  require('../../assets/2.png'),
  require('../../assets/1.png'),
  require('../../assets/2.png'),
  require('../../assets/1.png')
];

export class FlagPhotos extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: R.propOr('Flag Photos', 'title', state.params),
      headerLeft: <ChevronLeft marginLeft={25} />,
      headerRight: <Adjust marginRight={25} />
    };
  };

  state = {
    selected: []
  };

  handlePress = index => {
    const { selected } = this.state;

    this.setState(
      {
        selected: selected.includes(index)
          ? selected.filter(element => element !== index)
          : selected.concat([index])
      },
      this.updateTitle
    );
  };

  updateTitle = () => {
    const { selected } = this.state;
    const { navigation } = this.props;
    navigation.setParams({
      title: `Flag Photos${selected.length > 0 ? ` ${selected.length}` : ''}`
    });
  };

  render() {
    const { selected } = this.state;
    const { navigation } = this.props;
    return (
      <View flex={1}>
        <ScrollView flex={1}>
          <View flex={1} flexDirection="row" flexWrap="wrap" pt={25} px={15} pb={15}>
            {imgs.map((img, index) => (
              <TouchableOpacity
                key={Math.random()}
                w="33%"
                px={10}
                mb={20}
                onPress={() => this.handlePress(index)}
              >
                <Card w="100%" aspectRatio={1}>
                  <Image source={img} w="100%" h="100%" />
                  <View
                    position="absolute"
                    w={25}
                    h={25}
                    top={15}
                    right={15}
                    borderRadius={100}
                    bg={selected.includes(index) ? 'primary' : 'transparent'}
                    border={1}
                    borderColor={selected.includes(index) ? 'primary' : 'white'}
                  />
                </Card>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <Button
          position="absolute"
          alignSelf="center"
          bottom={50}
          w={239}
          onPress={() => navigation.navigate('SelectePackages')}
        >
          SELECT PACKAGES
        </Button>
      </View>
    );
  }
}

export default FlagPhotos;
