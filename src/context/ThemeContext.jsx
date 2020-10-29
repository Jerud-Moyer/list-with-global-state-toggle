import React from 'react';
import { useState } from 'react';

export const ThemeContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [themeSelection, setThemeSelection] = useState('day');

  const toggleTheme = () => {
    setThemeSelection(oldTheme => {
      if(oldTheme === 'day') return 'night';
      return 'day';
    });
  };
  
  
  return (
    <div>
      <ThemeContext.Provider value={{ themeSelection, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );

};
