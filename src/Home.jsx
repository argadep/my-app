import React from "react";

import logo from "./logo.svg";
import "./Home.css";

const Home = ({}) => {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Hooks Demo.</h1>
          <h5 className="App-intro">
            To get started, click on UI Developers menu.
          </h5>
        </header>
      </div>
    </div>
  );
};

export default Home;
