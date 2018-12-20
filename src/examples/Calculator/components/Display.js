import React from 'react';
import { View, Text } from 'react-native-web';
import theme from '../_utils/theme';
import { connect, keys } from '../_utils/constants';

const Display = () => (
  <View style={{
    height: 80,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 10
  }} >
    <Text style={{ color: theme().calculator.text }} middleware={
      [{
        middleware: connect,
        args: [
          [
            {
              from: `rndm.${keys.value.partial}`,
              to: 'children',
              default: 0
            }
          ]
        ]
      }]} >0</Text>
  </View>
);

export default Display;
