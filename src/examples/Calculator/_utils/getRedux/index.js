import { actions, keys, RNDM, DISPATCH, prop } from '../constants';
import build from './build'
import calculate from './calculate';

const getRedux = input => {
  switch (input) {
    case 'AC': {
      return [
        {
          prop,
          action: {
            type: build(RNDM, 'CALCULATOR_DID_CLEAR'),
            calculator_value: '',
            calculator_stored: '',
            calculator_symbol: actions['+'],
          },
        },
      ];
    }
    case '=': {
      return [
        {
          prop,
          action: {
            type: build(DISPATCH, 'DID_CALCULATE'),
            updates: [
              calculate,
              {
                type: build(RNDM, 'DID_CALCULATE_VALUE'),
                set: keys.value.partial,
                to: {
                  args: [
                    keys.stored.full,
                  ],
                  isFunc: true,
                  type: actions.identity,
                },
              },
              {
                type: build(RNDM, 'DID_CLEAR_STORED'),
                set: keys.stored.partial,
                to: '',
              },
              {
                type: build(RNDM, 'DID_CLEAR_SYMBOL'),
                set: keys.symbol.partial,
                to: actions['+'],
              },
            ],
          },
        },
      ];
    }
    case '+':
    case '-':
    case '÷':
    case 'x': {
      const action = actions[input];
      return [
        {
          prop,
          action: {
            type: build(DISPATCH, 'DID_BEGIN_CALCULATING'),
            updates: [
              calculate,
              {
                type: build(RNDM, 'DID_CLEAR_VALUE'),
                set: keys.value.partial,
                to: '',
              },
              {
                type: build(RNDM, 'DID_SET_SYMBOL'),
                set: keys.symbol.partial,
                to: action,
              },
            ],
          },
        },
      ]
    }
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '.': {
      return [
        {
          prop,
          action: {
            type: build(DISPATCH, 'DID_UPDATE_VALUE'),
            updates: [
              {
                type: build(RNDM, 'DID_UPDATE_VALUE'),
                set: keys.value.partial,
                to: {
                  args: [
                    keys.value.full,
                    input,
                  ],
                  isFunc: true,
                  type: actions.concatenate,
                },
              },
            ],
          },
        },
      ]
    }
  }
};

export default getRedux;
