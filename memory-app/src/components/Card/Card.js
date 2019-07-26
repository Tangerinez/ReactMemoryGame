import React from "react";
import "./Card.css";

const Card = props => {
  const backgroundImage = {
    backgroundImage: `url(${props.imageURL})`
  };
  return (
    <div
      className="Card"
      key={props.id}
      id={props.id}
      onClick={() => props.handleImageClick(props.id)}
      style={backgroundImage}
    />
  );
};

export default Card;
