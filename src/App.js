import "./App.css";

import React, { useState } from "react";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const backgroundSwitch = () => {
    setBackgroundColor(backgroundColor === "white" ? "black" : "white");
  };
  return (
    <div style={{ backgroundColor: backgroundColor }} className="App">
      <button onClick={backgroundSwitch}>
        Click Here to <br />
        Change Background Color
      </button>
    </div>
  );
};

export default App;
