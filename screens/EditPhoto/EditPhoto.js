import React, { Component } from 'react';
import Slider from 'react-native-slider';
import { Icon } from 'expo';
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
        <View position="absolute" alignSelf="center" alignItems="center" bottom={47}>
          <View w={377} px={54} py={17} flexDirection="row">
            <Icon.Entypo name="crop" color="white" size={27} />
            <Icon.Feather name="sun" color={theme.colors.primary} size={27} />
            <Icon.Feather name="search" color="white" size={27} />
            <Icon.Ionicons name="ios-contrast" color="white" size={27} />
            <Icon.MaterialCommunityIcons name="contrast-box" color="white" size={27} />
            <View
              position="absolute"
              top={0}
              right={0}
              bottom={0}
              left={0}
              borderRadius={6}
              bg="white"
              style={{ opacity: 0.1 }}
            />
          </View>
          <View w={324} mt={14}>
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
