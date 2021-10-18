import Display from "./components/Display";
import Game from "./components/Game";
import Characters from "./components/Characters";
import Drawing from "./components/Drawing";
import Clock from "./components/Clock";
import Menu from "./components/Menu";
import Thumbnails from "./components/Thumbnails";
import "./App.css";

// import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Where's Waldo At</h1>
      </header>
      <Display>
        <Game topLeft={<Clock />} left={<Characters />} right={<Drawing />} />
        <Menu>
          <Thumbnails />
        </Menu>
      </Display>
    </div>
  );
}

export default App;
