import { ITheme } from "../theme.interface";

const colors = {
  white: "rgba(255, 255, 255, 1)",
  white90: "rgba(255, 255, 255, 0.9)",
  white70: "rgba(255, 255, 255, 0.7)",
  white50: "rgba(255, 255, 255, 0.5)",
  white10: "rgba(255, 255, 255, 0.1)",
  black70: "rgba(0, 0, 0, 0.7)",
  richBlack: "rgba(0, 19, 33, 1)",
  richBlack08: "rgba(0, 19, 33, 0.8)",
  prussianBlue: "rgba(4, 35, 60, 1)",
};

export const theme: ITheme = {
  header: {
    bgColor: `linear-gradient(to right, ${colors.richBlack}, ${colors.prussianBlue})`,
    searchTextColor: colors.white90,
  },
  body: {
    bgColor: colors.richBlack08,
    titleColor: colors.white,
  },
  photo: {
    bgColor: colors.black70,
  },
  pagination: {
    selectedBg: colors.white10,
    selectedTextColor: colors.white,
    textColor: colors.white50,
    textColorHover: colors.white,
  },
  maintenance: {
    textColor: colors.white70,
  },
};
