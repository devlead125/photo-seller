import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import Text from './Text';
import View from './View';

const Button = ({ children, fontSize, color, onPress, loading, py, ...rest }) => {
  return (
    <View {...rest}>
      <TouchableOpacity onPress={onPress} disabled={loading}>
        <View py={py} flexDirection="row" justifyContent="center">
          {loading && <ActivityIndicator size="small" color={color} />}
          <Text fontSize={fontSize} color={color} alignItems="center">
            {children}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

Button.defaultProps = {
  fontSize: 19,
  bg: '#26A9FF',
  color: 'white',
  borderColor: '#26A9FF',
  border: 1,
  borderRadius: 4
};

export default Button;
