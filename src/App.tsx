import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Button from "./components/ui/Button";

import Home from "./routes/Home";
import Login from "./routes/Login";
import User from "./routes/User";

import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Routes>
        <Route path="/auth"></Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/user" element={<User/>}/>
      </Routes>
    </div>
  );
}

export default App;
