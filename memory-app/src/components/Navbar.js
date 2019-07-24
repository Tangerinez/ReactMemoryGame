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
          Score: {/*props for score*/} | Top Score {/*props for top score */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
