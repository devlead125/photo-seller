import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Icon } from 'expo';
import PropTypes from 'prop-types';
import View from '../../components/View';
import TouchableOpacity from '../../components/TouchableOpacity';
import Card from '../../components/Card';
import Text from '../../components/Text';
import Image from '../../components/Image';
import ChevronLeft from '../../icons/ChevronLeft';
import Adjust from '../../icons/Adjust';
import Picture from '../../icons/Picture';
import Retweet from '../../icons/Retweet';
import Button from '../../components/Button';
import theme from '../../theme';
import AddCustomerModal from './AddCustomerModal';

const imgs = [require('../../assets/1.png'), require('../../assets/2.png')];

const packs = [
  {
    name: 'Photo Package 1',
    detail: '[x2] 8X6 [x2] 7X5',
    price: 27
  },
  {
    name: 'Photo Package 2',
    detail: '[x2] 8X6 [x2] 8X12 [x2] 5X7',
    price: 55
  },
  {
    name: 'Individual',
    detail: '[x1] 8X6',
    price: 10
  }
];

export class ConfirmOrder extends Component {
  static navigationOptions = {
    title: 'Select Packages',
    headerLeft: <ChevronLeft marginLeft={25} />,
    headerRight: <Adjust marginRight={25} />
  };

  state = {
    imgIndex: 0,
    packIndex: 0,
    modalVisible: false
  };

  render() {
    const { imgIndex, packIndex, modalVisible } = this.state;
    return (
      <ScrollView flex={1}>
        <View flexDirection="row">
          <View flex={1} flexDirection="row" flexWrap="wrap" py={25} px={15}>
            {imgs.map((img, index) => (
              <TouchableOpacity
                key={img}
                w="50%"
                px={10}
                mb={20}
                onPress={() => this.setState({ imgIndex: index })}
              >
                <Card
                  w="100%"
                  aspectRatio={1}
                  borderTop={4}
                  borderColor={index === imgIndex ? 'primary' : 'white'}
                >
                  <Image source={img} w="100%" h="100%" />
                </Card>
              </TouchableOpacity>
            ))}
            <View w="100%" px={10}>
              <Card w="100%" flexDirection="row" p={12}>
                <Image source={imgs[imgIndex]} w={88} h={88} alignSelf="center" />
                <View alignItems="center" my={25}>
                  <Text fontSize={20}>8 x 6</Text>
                  <Text fontSize={14} color="#A8A8A8">
                    Dimensions
                  </Text>
                </View>
                <View alignItems="center" my={25}>
                  <Text fontSize={20}>3</Text>
                  <Text fontSize={14} color="#A8A8A8">
                    Quantity
                  </Text>
                </View>
                <View alignItems="center" my={25}>
                  <Picture />
                  <Text fontSize={14} color="#A8A8A8">
                    Edit Photo
                  </Text>
                </View>
                <View alignItems="center" my={25}>
                  <Retweet />
                  <Text fontSize={14} color="#A8A8A8">
                    Replace Photo
                  </Text>
                </View>
              </Card>
            </View>
          </View>
          <View w={371} p={25} justifyContent="flex-start">
            {packs.map(({ name, detail, price }, index) => (
              <TouchableOpacity
                key={name}
                mb={5}
                onPress={() => this.setState({ packIndex: index })}
              >
                <Card
                  px={25}
                  py={17}
                  flexDirection="row"
                  alignItems="center"
                  elevation={packIndex === index ? 3 : 0}
                >
                  <View>
                    <Text>{name}</Text>
                    <Text fontSize={12} color="grey">
                      {detail}
                    </Text>
                  </View>
                  <Text fontSize={12}>${price}</Text>
                </Card>
              </TouchableOpacity>
            ))}
            <View mt={17} border={1} borderColor="lightGrey" borderRadius={4}>
              <View px={27} py={14} flexDirection="row" borderBottom={1} borderColor="lightGrey">
                <Text>Subtotal</Text>
                <Text>$81.00</Text>
              </View>
              <View px={27} py={14} flexDirection="row" borderBottom={1} borderColor="lightGrey">
                <Text>Discount</Text>
                <Text>$0.00</Text>
              </View>
              <View px={27} py={14} flexDirection="row">
                <Text>Tax</Text>
                <Text>$15.00</Text>
              </View>
            </View>
            <View mx={27} mt={19} flexDirection="row">
              <Text fontWeight="bold" fontSize={24}>
                Total
              </Text>
              <Text fontWeight="bold" fontSize={24}>
                $96.00
              </Text>
            </View>
            <Card px={26} py={24} mt={19} alignItems="center" flexDirection="row">
              <Text fontSize={18} color="grey">
                Add Customer
              </Text>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => this.setState({ modalVisible: true })}
              >
                <Icon.SimpleLineIcons name="plus" color={theme.colors.grey} size={19} />
              </TouchableOpacity>
            </Card>
            <View mt={35} flexDirection="row">
              <Button flex={1}>PLACE</Button>
              <Button flex={1} ml={8}>
                SAVE
              </Button>
            </View>
          </View>
        </View>
        <AddCustomerModal
          isVisible={modalVisible}
          onBackdropPress={() => this.setState({ modalVisible: false })}
        />
      </ScrollView>
    );
  }
}

export default ConfirmOrder;
