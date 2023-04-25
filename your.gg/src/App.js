import logo from "./logo.svg";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import "./App.css";
import Main from "./components/main.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
