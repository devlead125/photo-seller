import React, { Component, Fragment } from 'react';
import { ScrollView } from 'react-native';
import View from '../../components/View';
import Card from '../../components/Card';
import Image from '../../components/Image';
import Text from '../../components/Text';
import TouchableOpacity from '../../components/TouchableOpacity';
import RetweetSmall from '../../icons/RetweetSmall';
import Close from '../../icons/Close';
import Add from '../../icons/Add';
import Button from '../../components/Button';
import ChevronLeft from '../../icons/ChevronLeft';
import Adjust from '../../icons/Adjust';
import TitleDetailCard from '../../components/TitleDetailCard';

const photos = [
  {
    id: 1,
    image: require('../../assets/1.png'),
    name: 'Photo 1',
    detail: '[x1] 8X6'
  },
  {
    id: 2,
    image: require('../../assets/2.png'),
    name: 'Photo 2',
    detail: '[x1] 8X6'
  },
  {
    id: 3,
    image: require('../../assets/1.png'),
    name: 'Photo 3',
    detail: '[x1] 7X5'
  },
  {
    id: 4,
    image: require('../../assets/2.png'),
    name: 'Photo 4',
    detail: '[x1] 7X5'
  }
];

const packs = [
  {
    id: 1,
    name: 'Photo Package 1',
    detail: '[x2] 8X6 [x2] 7X5',
    price: 27
  },
  {
    id: 2,
    name: 'Photo Package 2',
    detail: '[x2] 8X6 [x2] 8X12 [x2] 5X7',
    price: 55
  },
  {
    id: 3,
    name: 'Individual',
    detail: '[x1] 8X6',
    price: 10
  }
];

export class SelectPackages extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Select Packages',
    headerLeft: (
      <TouchableOpacity
        ml={30}
        activeOpacity={0.5}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <ChevronLeft />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity mr={30} activeOpacity={0.5}>
        <Adjust />
      </TouchableOpacity>
    )
  });

  state = {
    packIndex: 0,
    tabIndex: 0
  };

  render() {
    const { packIndex, tabIndex } = this.state;
    const { navigation } = this.props;
    return (
      <ScrollView flex={1}>
        <View flexDirection="row">
          <View flex={2} flexDirection="row" flexWrap="wrap" py={25} px={15}>
            {photos.map(photo => (
              <TouchableOpacity
                key={photo.id}
                w="50%"
                px={10}
                mb={20}
                onPress={() => navigation.navigate('EditPhoto')}
              >
                <Card w="100%" aspectRatio={1}>
                  <Image source={photo.image} w="100%" h="100%" />
                </Card>
              </TouchableOpacity>
            ))}
          </View>
          <View flex={1} p={25} justifyContent="flex-start">
            {packs.map(({ id, name, detail }, index) => (
              <Fragment key={id}>
                <TouchableOpacity mb={5} onPress={() => this.setState({ packIndex: index })}>
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
                    <Close />
                  </Card>
                </TouchableOpacity>
                {packIndex === index &&
                  photos.map(({ id, image, name, detail }) => (
                    <View key={id} mt={13} ml={60} mr={20} flexDirection="row">
                      <Image w={58} h={58} source={image} />
                      <View ml={18}>
                        <Text fontSize={18}>{name}</Text>
                        <Text fontSize={12} color="grey">
                          {detail}
                        </Text>
                      </View>
                      <View flex={1} />
                      <RetweetSmall />
                    </View>
                  ))}
              </Fragment>
            ))}
            <View my={15} borderTop={1} borderColor="lightGrey" />
            <View mx={47} justifyContent="flex-start" flexDirection="row">
              <Button
                py={3}
                fontWeight="normal"
                bg={tabIndex === 0 ? 'primary' : 'white'}
                borderColor={tabIndex === 0 ? 'primary' : 'white'}
                color={tabIndex === 0 ? 'white' : 'black'}
                onPress={() => this.setState({ tabIndex: 0 })}
              >
                Packages
              </Button>
              <Button
                py={3}
                fontWeight="normal"
                bg={tabIndex === 1 ? 'primary' : 'white'}
                borderColor={tabIndex === 1 ? 'primary' : 'white'}
                color={tabIndex === 1 ? 'white' : 'black'}
                onPress={() => this.setState({ tabIndex: 1 })}
              >
                Individual
              </Button>
            </View>
            {tabIndex === 0 ? (
              <>
                <Text mt={25} fontSize={24}>
                  Package Options
                </Text>
                <Text color="grey" fontSize={18}>
                  Select 1 or multiple packages
                </Text>
                <TitleDetailCard
                  title="Photo Package 1"
                  detail="[x2] 8X6 [x2] 7X5"
                  elevation={0}
                  borderRadius={0}
                  extra={<Add />}
                />
                <TitleDetailCard
                  title="Photo Package 2"
                  detail="[x2] 8X12 [x2] 8X6 [x2] 8X5"
                  elevation={0}
                  bg="lightGrey"
                  borderRadius={0}
                  extra={<Add />}
                />
                <TitleDetailCard
                  title="Photo Package 3"
                  detail="[x1] Frame  8X12 [x1] 8X12"
                  elevation={0}
                  borderRadius={0}
                  extra={<Add />}
                />
                <TitleDetailCard
                  title="Photo Package 4"
                  detail="[x1] Frame  8X12 [x1] 8X12"
                  elevation={0}
                  bg="lightGrey"
                  borderRadius={0}
                  extra={<Add />}
                />
              </>
            ) : (
              <>
                <Text mt={25} fontSize={24}>
                  Individual Options
                </Text>
                <Text color="grey" fontSize={18}>
                  Select 1 or multiple extras
                </Text>
                <View px={25} py={17} flexDirection="row" alignItems="center">
                  <Text>Framed 8X12</Text>
                  <Add />
                </View>
                <View px={25} py={17} flexDirection="row" alignItems="center" bg="lightGrey">
                  <Text>Single 8X12</Text>
                  <Add />
                </View>
                <View px={25} py={17} flexDirection="row" alignItems="center">
                  <Text>Single 8X6</Text>
                  <Add />
                </View>
                <View px={25} py={17} flexDirection="row" alignItems="center" bg="lightGrey">
                  <Text>Single 7X5</Text>
                  <Add />
                </View>
              </>
            )}
            <Button mx={50} mt={64} onPress={() => navigation.navigate('ConfirmOrder')}>
              CHECK-OUT
            </Button>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default SelectPackages;
