import React from 'react';
import View from './View';

export default ({ children, ...props }) => (
  <View
    borderRadius={6}
    style={{
      boxShadow: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#000000',
        shadowOpacity: 0.2
      },
      elevation: 2,
      marginBottom: 2
    }}
    {...props}
  >
    {children}
  </View>
);
