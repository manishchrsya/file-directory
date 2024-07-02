import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { FileDirectory } from "./components";
import { directory } from "./data/file-directory-data";

function App() {
  const [explorer, setExplorer] = useState(directory);
  return (
    <div className="App">
      <div className="app-wrapper">
        <FileDirectory explorer={explorer} />
      </div>
    </div>
  );
}

export default App;
