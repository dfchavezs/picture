import { useContext } from "react";
import { SwitchBody, SwitchContainer, SwitchSlider } from "./SwitchTheme.styled";
import MoonImg from "../../assets/svg/moon.svg";
import SunImg from "../../assets/svg/sun.svg";
import { ETheme } from "../../tools/utils/theme/theme.enum";
import { ThemeContext } from "../../tools/contexts/ThemeContext";

function SwitchTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  const sliderHandler = () => {
    setTheme(theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT);
  };

  return (
    <SwitchContainer $selected={theme === ETheme.LIGHT} onClick={() => sliderHandler()}>
      <SwitchBody $selected={theme === ETheme.LIGHT}>
        <SwitchSlider $selected={theme === ETheme.LIGHT}>
          <img src={theme === ETheme.LIGHT ? SunImg : MoonImg} />
        </SwitchSlider>
      </SwitchBody>
    </SwitchContainer>
  );
}
export default SwitchTheme;
