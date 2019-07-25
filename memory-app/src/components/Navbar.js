import React from "react";

const Navbar = props => {
  return (
    <nav>
      <ul>
        <li className="GameTitle">
          <a href="#">Clicky Game!</a>
        </li>
        <li>Click an image to begin!</li>
        <li>
          Score: {props.score} | Top Score {props.topScore}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
