import React from 'react';
import { View } from 'react-native-web';
import Button from './Button';
import rows from '../_utils/rows';

const Buttons = () => (
  <View>
    {rows().map((buttons, index) => (
        <View key={`row-${index}`} style={{flexDirection: 'row', marginBottom: 10 }} >
          {buttons.map(props => (
            <Button key={props.children} {...props} />
          ))}
        </View>
      )
    )}
  </View>
);

export default Buttons;
