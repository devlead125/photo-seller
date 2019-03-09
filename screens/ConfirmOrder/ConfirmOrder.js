import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { BoxShadow } from 'react-native-shadow';
import View from '../../components/View';
import Image from '../../components/Image';
import ChevronLeft from '../../icons/ChevronLeft';
import Adjust from '../../icons/Adjust';
import { getDp } from '../../utils/styled';

export class ConfirmOrder extends Component {
  static navigationOptions = {
    title: 'Select Packages',
    headerLeft: <ChevronLeft marginLeft={25} />,
    headerRight: <Adjust marginRight={25} />
  };

  render() {
    const shadowOpt = {
      width: parseInt(getDp(285), 10),
      height: parseInt(getDp(285), 10),
      color: '#000',
      border: 8,
      radius: 6,
      opacity: 0.1,
      x: -2,
      y: 2
    };
    return (
      <ScrollView>
        <View flexDirection="row">
          <View flex={1} px={-10} flexWrap="wrap" p={25}>
            <BoxShadow setting={shadowOpt}>
              <View w={285} h={285} borderRadius={6} borderTop={4} borderColor="primary">
                <Image source={require('../../assets/1.png')} w={285} h={285} />
              </View>
            </BoxShadow>
          </View>
          <View w={371} />
        </View>
      </ScrollView>
    );
  }
}

export default ConfirmOrder;
