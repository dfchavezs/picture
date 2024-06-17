import { ELang } from "./lang.enum";
import { ILang } from "./lang.interface";
import EnLang from "./langs/en.json";
import EsLang from "./langs/es.json";
import PtLang from "./langs/pt.json";

export const langMap: Record<ELang, ILang> = {
  [ELang.EN]: EnLang,
  [ELang.ES]: EsLang,
  [ELang.PT]: PtLang,
};
