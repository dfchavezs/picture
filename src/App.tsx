import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";

import Routers from "./presentation/tools/routers/Routers";
import Wrapper from "./presentation/tools/wrappers/Wrapper";

function App() {
  return (
    <Wrapper>
      <Routers />
    </Wrapper>
  );
}

export default App;
