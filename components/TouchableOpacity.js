import styled from 'styled-components';
import { space, flex, position, size, border, color } from '../utils/styled';

const TouchableOpacity = styled.TouchableOpacity`
  ${space}
  ${flex}
  ${position}
  ${size}
  ${border}
  ${color}
`;

TouchableOpacity.defaultProps = {
  justifyContent: 'space-between',
  activeOpacity: 1
};

export default TouchableOpacity;
