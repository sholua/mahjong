import React from "react";
import Cards from "./components/Cards";
import "./styles/main.scss";

function App() {
  return (
    <div className="game-layout u-text-center">
      <h1 className="heading-primary u-margin-bottom-medium">
        Mahjong like game
      </h1>

      <Cards />
    </div>
  );
}

export default App;
