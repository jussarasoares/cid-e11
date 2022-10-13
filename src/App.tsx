import { ReactElement } from "react";
import "./App.css";
import InputName from "./components/Form/InputName";

function App(): ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <p>Mellitus</p>
        <InputName />
      </header>
    </div>
  );
}

export default App;
