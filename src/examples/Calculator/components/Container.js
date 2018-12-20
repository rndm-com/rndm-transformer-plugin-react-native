import React from 'react';
import { View } from 'react-native-web';

const Container = ({ children }) => (
  <View style={{
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }} >
    {children}
  </View>
);

export default Container;
