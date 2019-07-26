import React from "react";
import NavBar from "./components/NavBar/Navbar";
import JumboHeader from "./components/JumboHeader/JumboHeader";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import Actor from "./components/Actors";
import "./App.css";

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

class App extends React.Component {
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

  handleImageClick = id => {
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
      <div>
        <NavBar
          score={this.state.currentScore}
          topScore={this.state.topScore}
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
