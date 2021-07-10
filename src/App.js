import { useState } from "react";
import logincontexts from "./Components/Logincontext";
import { Navebar } from "./Components/Navebars";
import { Nav } from "./Components/Newnav";

function App() {
  const [login, setLogin] = useState(false);
  function log() {
    setLogin(!login);
  }
  const datas = { login, log };
  return (
    <logincontexts.Provider value={datas}>
      {login ? <div>{Nav}</div> : <div>{Navebar}</div>}
    </logincontexts.Provider>
  );
}

export default App;
