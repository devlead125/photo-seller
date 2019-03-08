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
  fontSize: 15,
  fontFamily: 'lars-regular',
  color: 'black',
  p: 12,
  borderRadius: 4,
  border: 1,
  borderColor: 'grey'
};

export default TextInput;
