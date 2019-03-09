import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import View from '../../components/View';
import Card from '../../components/Card';
import Image from '../../components/Image';
import ChevronLeft from '../../icons/ChevronLeft';
import Adjust from '../../icons/Adjust';

export class ConfirmOrder extends Component {
  static navigationOptions = {
    title: 'Select Packages',
    headerLeft: <ChevronLeft marginLeft={25} />,
    headerRight: <Adjust marginRight={25} />
  };

  render() {
    return (
      <ScrollView>
        <View flexDirection="row">
          <View flex={1} px={-10} flexWrap="wrap" p={25}>
            <Card w={285} h={285} borderTop={4} borderColor="primary">
              <Image source={require('../../assets/1.png')} w="100%" h="100%" />
            </Card>
          </View>
          <View w={371} />
        </View>
      </ScrollView>
    );
  }
}

export default ConfirmOrder;
