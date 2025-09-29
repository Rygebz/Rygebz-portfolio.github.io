import React from "react";
import Navbar from "./Navbar"; // adjust path if in a folder
import "./App.css"; // optional, for any global styles

import Article from "./Article"; // adjust path if in a folder

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <Article />
    </div>
  );
}

export default App;