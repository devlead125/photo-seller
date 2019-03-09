import React from 'react';
import { ActivityIndicator } from 'react-native';
import Text from './Text';
import TouchableOpacity from './TouchableOpacity';

const Button = ({ children, fontSize, color, fontWeight, onPress, loading, ...props }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      flexDirection="row"
      justifyContent="center"
      activeOpacity={0.5}
      {...props}
    >
      {loading && <ActivityIndicator size="small" color={color} />}
      <Text fontSize={fontSize} color={color} fontWeight={fontWeight} alignItems="center">
        {children}
      </Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  fontSize: 14,
  fontWeight: 'bold',
  bg: 'primary',
  color: 'white',
  borderColor: 'primary',
  border: 1,
  py: 9,
  px: 20,
  borderRadius: 100
};

export default Button;
