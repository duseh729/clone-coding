import { React, useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import "./App.css";
import styles from "./css/public.css";
import nav from "./css/nav.module.css";
import logo from "./css/logo.module.css";
import userSearch from "./css/user-search.module.css";
import { faSun, faMoon, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Logo />
      <UserSearch />
    </div>
  );
}

// navbar 컴포넌트
function Navbar() {
  let [colorMode, setColorMode] = useState(true);
  return (
    <nav>
      <ul className={nav["left-nav-element"]}>
        <li>듀오찾기</li>
        <li>협곡찾기</li>
        <li>멀티서치 AI</li>
      </ul>
      <ul className={nav["right-nav-element"]}>
        <li>
          <button>KR</button>
        </li>
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

// 로고 및 검색창 컴포넌트
function Logo() {
  return (
    <div style={{ marginBottom: "30px" }}>
      <span className={logo["logo"]}>YOUR.GG</span>
    </div>
  );
}

// 검색창 컴포넌트
function UserSearch() {
  return (
    <div className={userSearch.search}>
      <div className={userSearch.country}>
        <span>KR</span>
        <span
          onClick={(e) => {
            e.target.classList.toggle("rotate");
          }}
        >
          🔻
        </span>
      </div>
      <input type="text" />
      <div className={userSearch.icon}>
        <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />{" "}
      </div>
    </div>
  );
}

// 공용 함수
const colorModeHandler = (target, flag) => {
  if (flag) {
    target.classList.remove("dark-mode");
    target.classList.add("white-mode");
  } else {
    target.classList.add("dark-mode");
    target.classList.remove("white-mode");
  }
};

export default App;
