import React from 'react';
import { Svg } from 'expo';

export default props => (
  <Svg width={16} height={19} fill="none" {...props}>
    <Svg.Path
      d="M12.25 12.63V9.083h3.524v7.095H6.03V19L.023 14.404 6.03 9.808v2.822h6.22zm-6.841 2.922h9.743V9.709h-2.28v3.547H5.409V11.07L1.05 14.404l4.358 3.334v-2.186z"
      fill="#000"
    />
    <Svg.Path
      fill="#000"
      d="M2.414 14.65l.382-.491 1.878 1.46-.382.491zM9.97 0l6.007 4.596L9.97 9.192V6.37H3.75v3.547H.226V2.822h9.743V0zM3.127 9.291V5.744h7.463V7.93l4.358-3.334-4.358-3.334v2.186H.848v5.843h2.28z"
    />
    <Svg.Path fill="#000" d="M11.33 3.38l.382-.49 1.878 1.46-.382.491z" />
  </Svg>
);
