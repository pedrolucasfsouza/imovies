
import { GlobalStyle } from "./styles/global";
import Header  from './components/header/index'
import Main from "./components/main/index"
import Buttons from "./components/buttons/index"
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from "./routes/routes.js"

import GlobalProvider from "./context/GlobalContext";


function App() {
  return (
<>
<GlobalProvider>

<Router>

  <Routes><></></Routes>

</Router>

<GlobalStyle></GlobalStyle>
</GlobalProvider>
</>
  );
}

export default App;
