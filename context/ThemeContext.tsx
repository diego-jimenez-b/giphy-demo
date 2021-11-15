import { createContext, ReactNode, useState } from 'react';

export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export const ThemeContextProvider = (props: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle('body--dark');
    setDarkMode((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
