import React from 'react';
import Container from './components/Container';
import Calculator from './components/Calculator';
import { setTheme } from './_utils/theme';

const Output = ({ theme }) => (
  setTheme(theme) ||
  <Container >
    <Calculator />
  </Container>
);

export default Output;
