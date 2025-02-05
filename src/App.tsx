import "./App.css";
import Game from "./Game.tsx";
import { gameData } from "./gameData.ts";

function App() {
  return (
    <>
      <h1>Cat Connections</h1>
      <div>
        <Game gameData={gameData} />
      </div>
      <br />
      <br />
      <p className="foot-disclaimer">
        Made for my beautiful angel princess girl.
        <br />
        Meow
      </p>
    </>
  );
}

export default App;
