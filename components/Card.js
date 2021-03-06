import { Card as BaseCard } from 'react-native-shadow-cards';
import styled from 'styled-components';
import { space, flex, position, size, border, color } from '../utils/styled';

const Card = styled(BaseCard)`
  overflow: hidden;
  ${space}
  ${flex}
  ${position}
  ${size}
  ${border}
  ${color}
`;

Card.defaultProps = {
  justifyContent: 'space-between',
  w: '100%'
};

export default Card;
