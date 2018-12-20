import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native-web';
import theme from '../_utils/theme';

const Button = ({
                  color,
                  backgroundColor,
                  marginLeft = 10,
                  marginRight = 0,
                  height = 44,
                  width = 44,
                  children = '',
                  middleware
                }) => (
  <TouchableOpacity activeOpacity={0.9} middleware={middleware} >
    <View style={{
      height,
      width,
      backgroundColor,
      marginLeft,
      marginRight,
      borderRadius: Math.min(width, height) / 2,
      alignItems: 'center',
      justifyContent: 'center'
    }} >
      <Text style={{ color }}>{children}</Text>
    </View>
  </TouchableOpacity>
);

export default Button;
