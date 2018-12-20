import { actions, keys, RNDM } from '../constants';
import build from './build'

const calculate = {
  type: build(RNDM, 'DID_STORE_VALUE'),
  set: keys.stored.partial,
  to: {
    args: [
      {
        isFunc: true,
        type: actions.parseFloat,
        args: [
          keys.stored.full,
        ],
        execute:[true]
      },
      {
        isFunc: true,
        type: actions.parseFloat,
        args: [
          keys.value.full,
        ],
        execute:[true]
      },
    ],
    isFunc: true,
    type: {
      type: actions.identity,
      isFunc: true,
      args: [
        `${keys.symbol.full}||${actions['+']}`,
      ],
    },
  },
};

export default calculate;
