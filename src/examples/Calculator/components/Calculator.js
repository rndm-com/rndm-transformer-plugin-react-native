import React from 'react';
import { View } from 'react-native-web';
import theme from '../_utils/theme';
import Display from './Display';
import Buttons from './Buttons';

const Calculator = () => (
  <View style={{
    backgroundColor: theme().calculator.container,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme().calculator.border }} >
    <Display />
    <Buttons />
  </View>
);

export default Calculator;
