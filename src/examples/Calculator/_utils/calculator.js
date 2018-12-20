import theme from './theme';

const calculator = () => ({
  children: [
    [ 'AC', '÷' ],
    [ '7', '8', '9', 'x' ],
    [ '4', '5', '6', '-' ],
    [ '1', '2', '3', '+' ],
    [ '0', '.', '=' ],
  ],
  size: 44,
  margin: 10,
  colours: [
    {
      backgroundColor: theme().calculator.backgroundColors[0],
      color: theme().calculator.colors[0],
    },
    {
      backgroundColor: theme().calculator.backgroundColors[1],
      color: theme().calculator.colors[1],
    },
    {
      backgroundColor: theme().calculator.backgroundColors[2],
      color: theme().calculator.colors[2],
    }
  ]
});

export default calculator;
