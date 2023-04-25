import { React, useState } from "react";
import styles from "../css/public.css";
import nav from "../css/nav.module.css";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function main() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

function Navbar() {
  const darkMode = { background: "rgb(44, 44, 44)", color: "white" };
  const whiteMode = { background: "white", color: "black" };
  let [colorMode, setColorMode] = useState(true);

  return (
    <nav>
      {/* prettier-ignore */}
      <ul className={nav.leftNavElement}>
        <li>듀오찾기</li>
        <li>협곡찾기</li>
        <li>멀티서치 AI</li>
      </ul>
      <ul className={nav.rightNavElement}>
        <li onClick={(document.body.style = {})}>
          <FontAwesomeIcon icon={faSun} />{" "}
        </li>
        <li>
          <button>KR</button>
        </li>
      </ul>
    </nav>
  );
}
