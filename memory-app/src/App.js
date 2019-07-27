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

class App extends React.Component {
  state = {
    currentScore: 0,
    topScore: 0,
    result: "Click a player to get started",
    clickedImages: [],
    gameOver: false,
    Actor
  };

  handleImageClick = id => {
    console.log(`Picture id: ${id}`);
    if (!this.state.clickedImages.includes(id)) {
      this.increasePoints();
      this.setState(prevState => ({
        gameOver: false,
        clickedImages: prevState.clickedImages.push(id)
      }));
    } else {
      this.reset();
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
      result: "Click a player to get started",
      clickedImages: [],
      gameOver: false,
      Actor
    });
    console.log(`Game has ended: ${this.state.gameOver}`);
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
          {this.state.Actor.map(actor => (
            <Card
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
