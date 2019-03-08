import styled from 'styled-components';
import { space, color, font } from '../utils/styled';

const Text = styled.Text`
  ${space}
  ${color}
  ${font}
`;

Text.defaultProps = {
  fontSize: 15,
  color: 'black'
};

export default Text;
