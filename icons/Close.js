import React from 'react';
import { Svg } from 'expo';

export default props => (
  <Svg width={23} height={23} fill="none" {...props}>
    <Svg.Path
      d="M11.5 23C17.851 23 23 17.851 23 11.5S17.851 0 11.5 0 0 5.149 0 11.5 5.149 23 11.5 23z"
      fill="#FA806C"
    />
    <Svg.Path d="M7.903 6.903l8.58 8.58M7.903 15.482l8.58-8.58" stroke="#fff" />
  </Svg>
);
