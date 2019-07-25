import React from "react";
import NavBar from "./components/Navbar";
import JumboHeader from "./components/JumboHeader";
import Footer from "./components/Footer";
import CardContainer from "./components/CardContainer";
import "./App.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <JumboHeader />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default App;
