import React from 'react';
import { Svg } from 'expo';

export default props => (
  <Svg width={12} height={21} fill="none" {...props}>
    <Svg.Path
      d="M9.545.419L.387 9.556a1.345 1.345 0 0 0 0 1.889l9.158 9.135c.561.56 1.448.56 2.01 0a1.55 1.55 0 0 0 0-2.176l-7.67-7.652a.358.358 0 0 1 0-.505l7.67-7.653a1.55 1.55 0 0 0 0-2.175A1.424 1.424 0 0 0 10.55 0c-.363 0-.724.14-1.005.419z"
      fill="#fff"
    />
  </Svg>
);
