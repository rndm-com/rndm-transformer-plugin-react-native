export const keys = [
  'stored',
  'value',
  'symbol',
].reduce((o, i) => {
  const partial = `calculator_${i}`;
  const full = `$.state.rndm.${partial}`;
  return { ...o, [i]: { partial, full}}
}, {});

export const actions = {
  '+' : '_.add',
  '-' : '_.subtract',
  '÷' : '_.divide',
  'x' : '_.multiply',
  identity: '_.identity',
  parseFloat: 'RNDM.Number.parseFloat',
  concatenate: 'RNDM.concatenate',
};

export const connect = 'redux.connect';

export const prop = 'onPress';
export const _ = '_';
export const RNDM = 'RNDM';
export const DISPATCH = [RNDM, 'DISPATCH'].join(_);
