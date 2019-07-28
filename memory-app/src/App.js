import React from "react";
import NavBar from "./components/NavBar/Navbar";
import JumboHeader from "./components/JumboHeader/JumboHeader";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import Actor from "./components/Actors";
import "./App.css";

const shuffle = array => {
  let m = array.length,
    t,
    i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
};

let clickedImages = [];

class App extends React.Component {
  state = {
    currentScore: 0,
    topScore: 0,
    result: "Click a player to get started",
    gameOver: false,
    Actor
  };

  handleImageClick = id => {
    console.log(`Picture id: ${id}`);
    if (!clickedImages.includes(id)) {
      this.increasePoints();
      clickedImages.push(id);
    } else {
      this.reset();
    }
  };

  increasePoints = () => {
    console.log(`Current score is: ${this.state.currentScore}`);
    let tempState = { ...this.state };
    if (this.state.currentScore === this.state.Actor.length) {
      clickedImages = [];
      // let tempState = { ...this.state };
      /* this.setState(prevState => ({
        result: "You won the game! Click to play again!",
        topScore: prevState.currentScore + 1,
        currentScore: 0,
        Actor
      }));
      */
      tempState.result = "You won the game! Click to play again!";
      tempState.topScore = tempState.currentScore + 1;
      tempState.currentScore = 0;
      tempState.Actor = Actor;
    } else if (this.state.currentScore + 1 > this.state.topScore) {
      /* this.setState(prevState => ({
        topScore: prevState.currentScore + 1,
        currentScore: prevState.currentScore + 1,
        result: "Nice! New high score!"
      })); */
      tempState.result = "Nice! New high score!";
      tempState.topScore = tempState.currentScore + 1;
      tempState.currentScore = tempState.currentScore + 1;
    } else {
      /* this.setState(prevState => ({
        currentScore: prevState.currentScore + 1,
        result: "Correct!"
      })); */
      tempState.currentScore = tempState.currentScore + 1;
      tempState.result = "Correct!";
    }
    // this.shuffleActors();
    let shuffledActors = shuffle(Actor);
    tempState.Actor = shuffledActors;
    console.log(tempState);
    this.setState(tempState);
  };

  reset = () => {
    clickedImages = [];
    this.setState({
      currentScore: 0,
      result: "Click a player to get started",
      Actor
    });
    console.log(`Game has ended: ${this.state.gameOver}`);
  };

  shuffleActors = () => {
    let shuffledActors = shuffle(Actor);
    this.setState({ Actor: shuffledActors });
  };

  render() {
    return (
      <div>
        <NavBar
          score={this.state.currentScore}
          topScore={this.state.topScore}
          result={this.props.result}
        />
        <JumboHeader />
        <div className="cardContainer">
          {this.state.Actor.map((actor, i) => (
            <Card
              key={i}
              id={actor.id}
              imageURL={actor.imageURL}
              handleImageClick={this.handleImageClick}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
