import { InputText } from "primereact/inputtext";
import HaystackLogo from "../../assets/png/haystack-wordmark-header-large.png";
import LangSelector from "../LangSelector/LangSelector";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import {
  HeaderBottom,
  HeaderContainer,
  HeaderOptionsGroup,
  HeaderTop,
  InputGroup,
} from "./Header.styled";
import { useIntl } from "react-intl";
import { Link, useNavigate, useParams } from "react-router-dom";
import { KeyboardEvent, useEffect, useState } from "react";

function Header() {
  const { tag } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>(tag ?? "");
  const intl = useIntl();
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (search.replace(/ /g, "") === "") navigate("/");
      else navigate(`/tag/${search}`);
    }
  };
  useEffect(() => {
    setSearch(tag ?? "");
  }, [tag]);
  return (
    <HeaderContainer>
      {/* Top Header */}
      <HeaderTop>
        {/* Image left */}
        <Link to="/">
          <img src={HaystackLogo} alt="haystack logo" />
        </Link>
        {/* Option right */}
        <HeaderOptionsGroup>
          <InputGroup>
            <InputText
              id="search"
              value={search}
              onChange={e => setSearch(e.target.value)}
              type="text"
              style={{
                height: "2rem",
                padding: "0.5rem 1.8rem 0.5rem 0.3rem",
                width: "12rem",
              }}
              placeholder={intl.formatMessage({ id: "tag.filter.label" })}
              onKeyUp={handleKeyPress}
            />
            <label htmlFor="search">
              <i className="pi pi-search" />
            </label>
          </InputGroup>
          <SwitchTheme />
          <LangSelector />
        </HeaderOptionsGroup>
      </HeaderTop>
      {/* Mobile: Panel similar to body to put the input text */}
      <HeaderBottom>
        <label>{intl.formatMessage({ id: "tag.filter.label" })}:</label>
        <InputGroup $displayResponsive>
          <InputText
            id="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            type="text"
            style={{
              height: "2rem",
              padding: "0.5rem 0.3rem 0.5rem 1.8rem",
              width: "60dvw",
            }}
            onKeyUp={handleKeyPress}
            placeholder={intl.formatMessage({ id: "tag.filter.placeholder" })}
          />
          <label htmlFor="search">
            <i className="pi pi-search" />
          </label>
        </InputGroup>
      </HeaderBottom>
    </HeaderContainer>
  );
}
export default Header;
