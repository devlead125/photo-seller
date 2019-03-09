import React, { Component } from 'react';
import Slider from 'react-native-slider';
import Image from '../../components/Image';
import View from '../../components/View';
import ChevronLeft from '../../icons/ChevronLeft';
import Adjust from '../../icons/Adjust';
import theme from '../../theme';

export class EditPhoto extends Component {
  static navigationOptions = {
    title: 'Edit Photo',
    headerLeft: <ChevronLeft marginLeft={25} />,
    headerRight: <Adjust marginRight={25} />
  };

  state = {
    value: 0.3
  };

  render() {
    const { value } = this.state;
    return (
      <View flex={1}>
        <Image flex={1} source={require('../../assets/3.png')} />
        <View position="absolute" alignSelf="center" bottom={47}>
          <View w={324}>
            <Slider
              value={value}
              onValueChange={value => this.setState({ value })}
              thumbTintColor={theme.colors.primary}
              minimumTrackTintColor={theme.colors.primary}
              maximumTrackTintColor="#26A9FF90"
              trackStyle={{ height: 10, borderRadius: 5 }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default EditPhoto;
