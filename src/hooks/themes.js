import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const useThemes = () => {
  const [theme, setTheme] = useState('day');
  const themeType = useThemeType();
  
  const serviceMap = {
    day: 'day',
    night: 'night'
  };

  useEffect(() => {
    serviceMap[themeType]()
      .then(theme => setTheme(theme));
    
  }, [themeType]);
  return theme;

};

export const useThemeType = () => {
  const { themeSelection } = useContext(ThemeContext);
  return themeSelection;
};

export const useThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return toggleTheme;
};
