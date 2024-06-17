import { ReactNode, useState } from "react";
import { ELang } from "../utils/intl/lang.enum";
import { LangContext } from "../contexts/LangContext";
import { IntlProvider } from "react-intl";
import { langMap } from "../utils/intl";
import { getLocalLang, setLocalLang } from "../utils/local-storage-manager";

interface ILangWrapperProps {
  children: ReactNode;
}

function LangWrapper({ children }: ILangWrapperProps) {
  const [lang, setLang] = useState<ELang>(getLocalLang());
  return (
    <LangContext.Provider
      value={{
        lang,
        setLang: newLang => {
          setLang(newLang);
          setLocalLang(newLang);
        },
      }}
    >
      <IntlProvider
        messages={langMap[lang] as unknown as Record<string, string>}
        locale={lang}
      >
        {children}
      </IntlProvider>
    </LangContext.Provider>
  );
}
export default LangWrapper;
