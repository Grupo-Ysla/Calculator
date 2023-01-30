import {createContext} from 'react';

const initialContextValues = {
  mode: 'light',
  calculationHistory: [
    {
      firtNumber: '',
      secondNumber: '',
      operationes: '',
      result: 'null',
    },
  ],
};

export const ThemeContext = createContext(initialContextValues);
