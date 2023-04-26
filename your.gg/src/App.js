import logo from "./logo.svg";
import { React, useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import "./App.css";
import styles from "./css/public.css";
import nav from "./css/nav.module.css";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

function Navbar() {
  let [colorMode, setColorMode] = useState(true);
  return (
    <nav>
      <ul className={nav.leftNavElement}>
        <li>듀오찾기</li>
        <li>협곡찾기</li>
        <li>멀티서치 AI</li>
      </ul>
      <ul className={nav.rightNavElement}>
        <li>
          <button>KR</button>
        </li>
        <div className=""></div>
        <li
          onClick={() => {
            colorMode ? setColorMode(false) : setColorMode(true);
            colorModeHandler(document.body, colorMode);
          }}
        >
          <FontAwesomeIcon icon={colorMode ? faMoon : faSun} style={{ fontSize: "16px" }} />
        </li>
      </ul>
    </nav>
  );
}

const colorModeHandler = (target, flag) => {
  if (flag) {
    target.classList.remove("dark-mode");
    target.classList.add("white-mode");
  } else {
    target.classList.add("dark-mode");
    target.classList.remove("white-mode");
  }
};

// 개발 족같네

export default App;
