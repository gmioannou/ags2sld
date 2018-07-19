import React, { Component } from "react";
import Main from "./Components/Main";
import NavBar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Main className="container" />
      </div>
    );
  }
}

export default App;
