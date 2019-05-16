import React, { Component } from 'react';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import './App.scss';
import "slick-carousel/slick/slick.scss"; 
import "slick-carousel/slick/slick-theme.scss";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
