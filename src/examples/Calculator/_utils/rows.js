import calculator from './calculator';
import getRedux from './getRedux/index';
import { connect } from './constants';

const rows = () => {
  const calc = calculator();
  return calc.children.map((items, row) => {
    return items.map((children, column) => {
      const missing = (column === 0) ? 4 - items.length : 0;
      const width = calc.size + (calc.size + calc.margin) * missing;
      const height = calc.size;
      const marginRight = (column === items.length - 1) ? calc.margin : 0;
      const marginLeft = calc.margin;
      const middleware = [
        {
          middleware: connect,
          args: [
            [],
            getRedux(children),
          ]
        },
      ];
      return {
        width,
        height,
        marginRight,
        marginLeft,
        middleware,
        children,
        ...calc.colours[column === items.length - 1 ? 1 : row === 0 ? 2 : 0],
      }
    })
  });
};

export default rows;
