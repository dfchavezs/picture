import { createContext } from "react";
import { ETheme } from "../utils/theme/theme.enum";

interface IThemeContext {
  theme: ETheme;
  setTheme: (theme: ETheme) => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: ETheme.LIGHT,
  setTheme: () => {},
});
