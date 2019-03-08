import React from 'react';
import { Svg } from 'expo';

export default props => (
  <Svg width={23} height={23} fill="none" {...props}>
    <Svg.Path
      d="M11.5 23C17.851 23 23 17.851 23 11.5S17.851 0 11.5 0 0 5.149 0 11.5 5.149 23 11.5 23z"
      fill="#26A9FF"
    />
    <Svg.Path
      d="M11.461 8a.35.35 0 0 0-.35.35v2.761H8.35a.35.35 0 0 0-.35.35v.078c0 .193.157.35.35.35h2.761v2.761c0 .193.157.35.35.35h.078a.35.35 0 0 0 .35-.35v-2.761h2.761a.35.35 0 0 0 .35-.35v-.078a.35.35 0 0 0-.35-.35h-2.761V8.35a.35.35 0 0 0-.35-.35h-.078z"
      fill="#fff"
    />
  </Svg>
);
