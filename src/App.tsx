import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Button from "./components/ui/Button";

import Home from "./routes/Home";

import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Routes>
        <Route path="/auth"></Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
