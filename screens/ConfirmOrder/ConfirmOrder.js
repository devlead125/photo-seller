import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import View from '../../components/View';
import Image from '../../components/Image';
import ChevronLeft from '../../icons/ChevronLeft';
import Adjust from '../../icons/Adjust';
import styles from '../../styles';

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
            <View mx={10} mb={10} style={styles.shadow}>
              <Image source={require('../../assets/1.png')} />
            </View>
          </View>
          <View w={371} style={styles.shadow} />
        </View>
      </ScrollView>
    );
  }
}

export default ConfirmOrder;
