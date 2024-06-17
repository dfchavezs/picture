import { ELang } from "./intl/lang.enum";
import { ETheme } from "./theme/theme.enum";

enum ELocalStorageKey {
  LANG = "lang",
  THEME = "theme",
}

// Save this information in the browser (persistent)

export const getLocalLang = (): ELang => {
  const langStr = localStorage.getItem(ELocalStorageKey.LANG);
  if (langStr) return langStr as ELang;
  else return ELang.EN;
};

export const setLocalLang = (lang: ELang) => {
  localStorage.setItem(ELocalStorageKey.LANG, lang);
};

export const getLocalTheme = (): ETheme => {
  const langStr = localStorage.getItem(ELocalStorageKey.THEME);
  if (langStr) return langStr as ETheme;
  else return ETheme.LIGHT;
};

export const setLocalTheme = (lang: ETheme) => {
  localStorage.setItem(ELocalStorageKey.THEME, lang);
};
