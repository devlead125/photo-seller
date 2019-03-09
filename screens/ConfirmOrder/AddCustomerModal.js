import React, { Component } from 'react';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import { Icon } from 'expo';
import Text from '../../components/Text';
import TextInput from '../../components/TextInput';
import View from '../../components/View';
import Image from '../../components/Image';
import Button from '../../components/Button';
import Card from '../../components/Card';
import theme from '../../theme';

export class AddCustomerModal extends Component {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onBackdropPress: PropTypes.func.isRequired,
    onAddCustomer: PropTypes.func.isRequired
  };

  render() {
    const { isVisible, onBackdropPress, onAddCustomer } = this.props;
    return (
      <Modal isVisible={isVisible} onBackdropPress={onBackdropPress}>
        <Form
          onSubmit={onAddCustomer}
          render={({ handleSubmit, pristine, invalid }) => (
            <View flexDirection="row" bg="white" borderRadius={4} px={58} py={74}>
              <View flex={2} justifyContent="flex-start" mr={52}>
                <Text fontSize={20}>New User</Text>
                <Field
                  name="name"
                  render={({ input }) => <TextInput {...input} mt={15} placeholder="Name" />}
                />
                <Field
                  name="email"
                  render={({ input }) => <TextInput {...input} mt={15} placeholder="Email" />}
                />
                <Field
                  name="city"
                  render={({ input }) => <TextInput {...input} mt={15} placeholder="City" />}
                />
                <View mt={15} flexDirection="row">
                  <Field
                    name="zipCode"
                    render={({ input }) => <TextInput {...input} placeholder="Zip Code" flex={1} />}
                  />
                  <Field
                    name="country"
                    render={({ input }) => (
                      <TextInput {...input} placeholder="Country" flex={1} ml={8} />
                    )}
                  />
                </View>
                <Text fontSize={20} mt={19}>
                  Add Payment Method
                </Text>
                <Field
                  name="cardNumber"
                  render={({ input }) => <TextInput {...input} mt={15} placeholder="Card Number" />}
                />
                <View mt={15} flexDirection="row">
                  <Field
                    name="mmyy"
                    render={({ input }) => <TextInput {...input} placeholder="MMYY" flex={1} />}
                  />
                  <Field
                    name="cvc"
                    render={({ input }) => (
                      <TextInput {...input} placeholder="CVC" flex={1} ml={8} />
                    )}
                  />
                </View>
              </View>
              <View flex={1} justifyContent="flex-start">
                <Text fontSize={20} mt={19}>
                  Payment Methods
                </Text>
                <View mt={15} flexDirection="row" justifyContent="flex-start" alignItems="center">
                  <Image source={require('../../assets/apple-pay.png')} />
                  <Text ml={15} fontWeight="bold" fontSize={12}>
                    Apple Pay
                  </Text>
                </View>
                <View mt={9} flexDirection="row" justifyContent="flex-start" alignItems="center">
                  <Image source={require('../../assets/card-pay.png')} />
                  <Text ml={15} fontWeight="bold" fontSize={12}>
                    Card Ending **96
                  </Text>
                </View>
                <Text fontSize={20} mt={23}>
                  Payment Methods
                </Text>
                <Card mt={13} px={25} py={17} flexDirection="row" alignItems="center">
                  <View>
                    <Text>Order #21239</Text>
                    <Text fontSize={12} color="grey">
                      08/25/2018
                    </Text>
                  </View>
                  <Icon.SimpleLineIcons name="plus" color={theme.colors.grey} size={19} />
                </Card>
                <View flex={1} />
                <Button onPress={handleSubmit} disabled={pristine || invalid}>
                  ADD CUSTOMER
                </Button>
              </View>
            </View>
          )}
        />
      </Modal>
    );
  }
}

export default AddCustomerModal;
