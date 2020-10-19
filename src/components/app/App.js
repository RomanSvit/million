import React from "react";
import Game from "../game/Game";
import GameOver from "../gameOver/GameOver";
// import BeginGame from "../beginningGame/BeginGame"
import Start from "../start/Start";
import "./App.css";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <BeginGame /> */}
      <Switch>
        <Route path="/" exact component={Start} />
        <Route path="/game" component={Game} />
        <Route path="/gameover" component={GameOver} />
      </Switch>
    </>
  );
};

export default App;
