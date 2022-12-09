import React from 'react';
import {ThemeContext, themes} from './ThemeContext';

export function ThemeProvider(props) {
  return (
    <ThemeContext.Provider value={themes}>
      {props.children}
    </ThemeContext.Provider>
  );
}
