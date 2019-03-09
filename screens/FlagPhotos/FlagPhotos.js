import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import View from '../../components/View';
import TouchableOpacity from '../../components/TouchableOpacity';
import ChevronLeft from '../../icons/ChevronLeft';
import Adjust from '../../icons/Adjust';
import Card from '../../components/Card';
import Image from '../../components/Image';

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
  static navigationOptions = {
    title: 'FlagPhotos',
    headerLeft: <ChevronLeft marginLeft={25} />,
    headerRight: <Adjust marginRight={25} />
  };

  state = {
    selected: []
  };

  render() {
    const { selected } = this.state;
    return (
      <ScrollView flex={1}>
        <View flex={1} flexDirection="row" flexWrap="wrap" pt={25} px={15} pb={15}>
          {imgs.map((img, index) => (
            <TouchableOpacity
              key={Math.random()}
              w="33%"
              px={10}
              mb={20}
              onPress={() =>
                this.setState({
                  selected: selected.includes(index)
                    ? selected.filter(element => element !== index)
                    : selected.concat(selected, [index])
                })
              }
            >
              <Card
                w="100%"
                aspectRatio={1}
                borderTop={4}
                borderColor={selected.includes(index) ? 'primary' : 'white'}
              >
                <View position="absolute" w={25} h={25} top={15} right={15} bg="primary" />
                <Image source={img} w="100%" h="100%" />
              </Card>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }
}

export default FlagPhotos;
