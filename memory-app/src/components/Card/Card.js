import React from "react";

const Card = props => {
  const backgroundImageURL =
    "background-image: url('../images/" + props.imageURL + "');";
  return (
    <div
      className="Card"
      key={props.id}
      id={props.id}
      onClick={() => props.imageClick(props.id)}
    >
      <img src={backgroundImageURL} className="actors" alt="asian-actor" />
    </div>
  );
};

export default Card;
