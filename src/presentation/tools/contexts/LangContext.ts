import { createContext } from "react";
import { ELang } from "../utils/intl/lang.enum";

interface ELangContext {
  lang: ELang;
  setLang: (lang: ELang) => void;
}

export const LangContext = createContext<ELangContext>({
  lang: ELang.EN,
  setLang: () => {},
});
