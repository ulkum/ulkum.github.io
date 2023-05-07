import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <button onClick={() => alert("Попался рак!")} className="button">
        Push me
      </button>
    </div>
  );
};

export default App;
