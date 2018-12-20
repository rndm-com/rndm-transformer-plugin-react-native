# RNDM Transformer: React - React Native Plugin

## About

This plugin opens the ability to write Server side React Native code that can be transformed into JSOn to be ingested by the [RNDM Renderer](https://github.com/rndm-com/rndm-render).

## Requirements

In order to make use of this you will need to be using the [@rndm/transform-from-react](https://github.com/rndm-com/rndm-transform-from-react) package.

## Installation

### From NPM

```sh
npm install --save @rndm/transformer-plugin-react-native
```

If you are using this as a submodule, then pass this into the 'addPlugins' method exposed by the

## Usage

This transformer can be wrapped around React Native components to derive properties, types and other aspects and generate JSON results

**Example**

Given the below React code:

```javascript
import React from 'react';
import { View, Text } from 'react-native';

const Element = () => (
  <View style={{ flex: 1, backgroundColor: 'red' }} >
    <Text style={{ color: 'green' }} >
      Hello World
    </Text>
  </View>
)

export default Element;
```

The requirements are to generate a JSON object that describes the Element function that can be ingested by the [RNDM Renderer](https://github.com/rndm-com/rndm-render);

In order to do this, all we have to do is wrap the Element in the transformer function.

```javascript
import transform from '@rndm/transform-from-react';
import Element from './Element';

const output = transform(Element);

console.log(outut);
```

This will then give us the following JSON Object.

```json
{
    "type": "react-native.View",
    "props": {
        "style": {
            "flex": 1,
            "backgroundColor": "red"
        },
        "children": [
            {
                "type": "react-native.Text",
                "props": {
                    "style": {
                        "color": "green"
                    },
                    "children": "Hello World"
                }
            }
        ]
    }
}
```

The RNDM Renderer can then ingest and render this as React Native code
