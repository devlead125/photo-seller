import React, { Component } from 'react';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import Text from '../../components/Text';
import View from '../../components/View';

export class AddCustomerModal extends Component {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onBackdropPress: PropTypes.func.isRequired
  };

  render() {
    const { isVisible, onBackdropPress } = this.props;
    return (
      <Modal isVisible={isVisible} onBackdropPress={onBackdropPress}>
        <View flex={1} flexDirection="row" bg="white" borderRadius={4} px={58} py={74}>
          <View flex={2}>
            <Text fontSize={20}>New User</Text>
          </View>
        </View>
      </Modal>
    );
  }
}

export default AddCustomerModal;
