import React from 'react';
import { Svg } from 'expo';

export default props => (
  <Svg width={26} height={31} fill="none" {...props}>
    <Svg.Path
      d="M19.906 20.607V14.82h5.727v11.576H9.8V31L.037 23.501 9.8 16.003v4.604h10.106zM8.79 25.374h15.833V15.84h-3.705v5.788H8.789v-3.567l-7.082 5.44L8.79 28.94v-3.567z"
      fill="#000"
    />
    <Svg.Path
      fill="#000"
      d="M3.916 23.901l.62-.798 3.065 2.383-.62.798zM16.2 0l9.763 7.499-9.763 7.499v-4.605H6.094v5.788H.367V4.605H16.2V0zM5.083 15.16V9.37h12.128v3.567l7.082-5.44L17.21 2.06v3.567H1.377v9.534h3.706z"
    />
    <Svg.Path fill="#000" d="M18.403 5.514l.62-.798 3.065 2.383-.62.798z" />
  </Svg>
);
