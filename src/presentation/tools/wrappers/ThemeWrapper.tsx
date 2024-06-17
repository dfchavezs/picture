import { ReactNode, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ETheme } from "../utils/theme/theme.enum";
import { themeMap } from "../utils/theme";
import { ThemeContext } from "../contexts/ThemeContext";
import { getLocalTheme, setLocalTheme } from "../utils/local-storage-manager";

interface IThemeWrapperProps {
  children: ReactNode;
}

function ThemeWrapper({ children }: IThemeWrapperProps) {
  const [theme, setTheme] = useState<ETheme>(getLocalTheme());
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: newTheme => {
          setTheme(newTheme);
          setLocalTheme(newTheme);
        },
      }}
    >
      <StyledThemeProvider theme={themeMap[theme]}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
}
export default ThemeWrapper;
