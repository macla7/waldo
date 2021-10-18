import React from "react";

function Game(props) {
  return (
    <div>
      <h3>Game</h3>
      <div>
        <div>
          <div>{props.topLeft}</div>
          <div>{props.left}</div>
        </div>
        <div>{props.right}</div>
      </div>
    </div>
  );
}

export default Game;
