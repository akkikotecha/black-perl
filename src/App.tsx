import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AboutUs, Home } from "./Page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
