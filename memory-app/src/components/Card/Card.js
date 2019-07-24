import React from "react";

const Card = props => {
  const backgroundImageURL =
    "background-image: url('../images/" +
    {
      /*image URL props from CardContainer*/
    } +
    "');";

  return <div style={backgroundImageURL} />;
};

export default Card;
