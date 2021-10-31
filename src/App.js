
import { GlobalStyle } from "./styles/global";
import Header  from './components/header/index'
import Main from "./components/main/index"
import Buttons from "./components/buttons/index"

import GlobalProvider from "./context/GlobalContext";


function App() {
  return (
<>
<GlobalProvider>
<Header>
</Header>
<Main></Main>
<Buttons></Buttons>

<GlobalStyle></GlobalStyle>
</GlobalProvider>
</>
  );
}

export default App;
