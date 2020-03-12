import React from "react";
import Card from "./Card";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const titles = ["Card", "Pepito", "Juancito", "Picaron", "Etc, etc"];

  return titles.map(function(title) {
    return <Card
      key={title}
      title={title}
      name="Pepito Piscina"
      otro="asdfasdf"
    />;
  });
}

export default App;
