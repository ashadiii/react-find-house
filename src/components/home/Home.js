import React, { Component } from 'react';
import Portfolio from "./portfolio/Portfolio";
import Welcome from "./welcome/Welcome";
import Services from "./services/Services";
import Popular from "./popular/Popular";
import Agents from "./agents/Agents";
import News from "./news/News";
import Customer from "./customer/Customer";
import Partner from "./partner/Partner";
import Subscribe from "./subscribe/Subscribe";
import Footer from "./footer/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Portfolio />
        <Welcome />
        <Services />
        <Popular />
        <Agents />
        <Customer />
        <Partner />
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

export default Home;
