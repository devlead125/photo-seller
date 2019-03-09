import React from 'react';
import { BoxShadow } from 'react-native-shadow';
import View from './View';
import { getDp } from '../utils/styled';

const Card = ({
  children,
  w,
  h,
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderColor,
  ...rest
}) => {
  return (
    <View
      w={w}
      h={h}
      m={m}
      mx={mx}
      my={my}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      border={border}
      borderTop={borderTop}
      borderRight={borderRight}
      borderBottom={borderBottom}
      borderLeft={borderLeft}
      borderColor={borderColor}
      {...rest}
    >
      <BoxShadow
        setting={{
          width: parseInt(getDp(w), 10),
          height: parseInt(getDp(h), 10),
          color: '#000000',
          border: 6,
          radius: 6,
          opacity: 0.1,
          x: 0,
          y: 2
        }}
      >
        <View w={w} h={h} {...rest}>
          {children}
        </View>
      </BoxShadow>
    </View>
  );
};

Card.defaultProps = { borderRadius: 8 };

export default Card;
