import styled from 'styled-components';
import { space, flex, position, size, border, color } from '../utils/styled';

const View = styled.View`
  ${space}
  ${flex}
  ${position}
  ${size}
  ${border}
  ${color}
`;

View.defaultProps = {
  justifyContent: 'space-between'
};

export default View;
