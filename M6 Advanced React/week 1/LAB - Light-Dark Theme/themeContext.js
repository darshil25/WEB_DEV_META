import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, settheme] = useState('light')
  return (
    <ThemeContext.Provider>
      value={{ theme, toggletheme: () => settheme(theme === 'light' ? 'dark' : 'light') }}
      {children}
    </ThemeContext.Provider>)
}

export const useTheme = () => ({ theme: "light" });
