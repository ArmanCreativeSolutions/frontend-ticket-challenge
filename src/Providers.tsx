import React from 'react';
import { JssProvider, ThemeProvider } from 'react-jss';
import { create } from 'jss';
import preset from 'jss-preset-default';
import theme from './theme';

// Create JSS instance
const jss = create(preset());

interface Props {
  children: React.ReactNode;
}

const Provider: React.FC<Props> = ({ children }) => {
  return (
    <JssProvider jss={jss}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </JssProvider>
  );
};

export default Provider;
