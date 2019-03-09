import styled from 'styled-components';
import { space, color, font, flex, size, border } from '../utils/styled';

const TextInput = styled.TextInput`
  ${space}
  ${color}
  ${font}
  ${flex}
  ${size}
  ${border}
`;

TextInput.defaultProps = {
  fontSize: 12,
  px: 24,
  py: 9,
  borderRadius: 4,
  border: 1,
  borderColor: 'lightGrey',
  fontFamily: 'nunito'
};

export default TextInput;
