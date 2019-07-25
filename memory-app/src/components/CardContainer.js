import React from "react";
import Actor from "./Actors";
import Card from "./Card/Card";

const shuffle = array => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

class CardContainer extends React.Component {
  state = {
    currentScore: 0,
    topScore: 0,
    result: "",
    clickedImages: [],
    gameOver: false,
    Actor
  };

  componentDidMount = () => {
    this.setState({ result: "Click a player to get started" });
  };

  imageClick = id => {
    console.log(`Picture id: ${id}`);
    if (!this.state.clickedImages.includes(id)) {
      this.increasePoints();
      this.setState(prevState => ({
        gameOver: false,
        clickedImages: prevState.clickedImages.push(id)
      }));
    }
  };

  increasePoints = () => {
    console.log(`Current score is: ${this.state.currentScore}`);
    if (this.state.currentScore + 1 > this.state.topScore) {
      this.setState(prevState => ({
        topScore: prevState.currentScore + 1,
        currentScore: prevState.currentScore + 1,
        result: "Nice! New high score!"
      }));
    } else {
      this.setState(prevState => ({
        currentScore: prevState.currentScore + 1,
        result: "Correct!"
      }));
    }
    this.setState(prevState => ({
      clickedImages: shuffle(prevState.clickedImages)
    }));
  };

  reset = () => {
    this.setState({
      currentScore: 0,
      topScore: 0,
      result: "",
      clickedImages: [],
      gameOver: false,
      Actor
    });
    console.log(`Game has ended: ${this.state.gameOver}`);
  };

  render() {
    return (
      <div className="cardContainer">
        <div className="cardStyling">
          {this.state.Actor.map(actor => (
            <Card
              id={actor.id}
              imageURL={actor.imageURL}
              imageClick={this.imageClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CardContainer;
