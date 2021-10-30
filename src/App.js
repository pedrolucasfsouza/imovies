
import { GlobalStyle } from "./styles/global";
import Header  from './components/header/index'
import Main from "./components/main/index"
import Buttons from "./components/buttons/index"


function App() {
  return (
    <div className="App">
<Header>
</Header>
<Main></Main>
<Buttons></Buttons>

<GlobalStyle></GlobalStyle>
    </div>
  );
}

export default App;
