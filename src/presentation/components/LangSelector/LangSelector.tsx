import { useContext } from "react";
import { DropdownContainer, Option } from "./LangSelector.styled";
import { ELang } from "../../tools/utils/intl/lang.enum";
import EsFlag from "../../assets/svg/es-flag.svg";
import EnFlag from "../../assets/svg/en-flag.svg";
import PtFlag from "../../assets/svg/pt-flag.svg";
import { LangContext } from "../../tools/contexts/LangContext";
import { Dropdown } from "primereact/dropdown";
import { ChevronDownIcon } from "primereact/icons/chevrondown";

interface ILangSelectorOption {
  code: ELang;
  name: string;
  imgSrc: string;
}

const options: ILangSelectorOption[] = [
  { code: ELang.EN, name: "English", imgSrc: EnFlag },
  { code: ELang.ES, name: "Español", imgSrc: EsFlag },
  { code: ELang.PT, name: "Português", imgSrc: PtFlag },
];

function LangSelector() {
  const { lang, setLang } = useContext(LangContext);

  const countryOptionTemplate = (option: ILangSelectorOption) => {
    return (
      <Option>
        <img alt={option.name} src={option.imgSrc} style={{ width: "1rem" }} />
        <div>{option.name}</div>
      </Option>
    );
  };

  return (
    <DropdownContainer>
      <Dropdown
        value={options.find(o => o.code === lang)}
        onChange={e => setLang(e.value.code)}
        options={options}
        optionLabel="name"
        valueTemplate={countryOptionTemplate}
        itemTemplate={countryOptionTemplate}
        style={{ width: "10rem" }}
        panelStyle={{ margin: "0", padding: "0" }}
        dropdownIcon={<ChevronDownIcon />}
      />
    </DropdownContainer>
  );
}

export default LangSelector;
