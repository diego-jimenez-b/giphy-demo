import { createContext, ReactNode, useEffect, useState } from 'react';

export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export const ThemeContextProvider = (props: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (!darkMode) {
      localStorage.setItem('isDarkMode', 'true');
    } else {
      localStorage.removeItem('isDarkMode');
    }

    setDarkMode((prevState) => !prevState);
  };

  useEffect(() => {
    const isDarkMode = localStorage.getItem('isDarkMode');
    if (isDarkMode) setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) document.body.classList.add('body--dark');
    else document.body.classList.remove('body--dark');
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
