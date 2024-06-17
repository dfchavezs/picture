import { ITheme } from "../theme.interface";

const colors = {
  white: "rgba(255, 255, 255, 1)",
  black90: "rgba(0, 0, 0, 0.9)",
  black50: "rgba(0, 0, 0, 0.5)",
  black10: "rgba(0, 0, 0, 0.1)",
  black70: "rgba(0, 0, 0, 0.7)",
  black: "rgba(0, 0, 0, 1)",
  richBlack: "rgba(0, 19, 33, 1)",
  prussianBlue: "rgba(4, 35, 60, 1)",
};

export const theme: ITheme = {
  header: {
    bgColor: `linear-gradient(to right, ${colors.richBlack}, ${colors.prussianBlue})`,
    searchTextColor: colors.black90,
  },
  body: {
    bgColor: colors.white,
    titleColor: colors.black,
  },
  photo: {
    bgColor: colors.black70,
  },
  pagination: {
    selectedBg: colors.black10,
    selectedTextColor: colors.black,
    textColor: colors.black50,
    textColorHover: colors.black,
  },
  maintenance: {
    textColor: colors.black70,
  },
};
