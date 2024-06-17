import { ETheme } from "./theme.enum";
import { theme as lightTheme } from "./themes/light";
import { theme as darkTheme } from "./themes/dark";
import { ITheme } from "./theme.interface";

export const themeMap: Record<ETheme, ITheme> = {
  [ETheme.DARK]: darkTheme,
  [ETheme.LIGHT]: lightTheme,
};
