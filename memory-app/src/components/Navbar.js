import React from "react";
import "./NavBar.css";

const Navbar = props => {
  return (
    <nav className="navBar">
      <ul className="navBar-list-container">
        <li className="navBarText">Clicky Game!</li>
        <li className="navBarText">Click an image to begin!</li>
        <li className="navBarText">
          Score: {props.score} | Top Score {props.topScore}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
