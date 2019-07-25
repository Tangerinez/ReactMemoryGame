import React from "react";

const Card = props => {
  const backgroundImageURL =
    "background-image: url('../images/" + props.imageURL + "');";
  return (
    <section
      id={props.id}
      className="tc pa3 hvr-float-shadow animated zoomInUp"
      value={props.id}
      onClick={() => {
        props.imageClick(props.id);
      }}
    >
      <article className="w4 pa2 ">
        <img src={backgroundImageURL} className="actor" alt="game-actor" />
      </article>
    </section>
  );
};

export default Card;
