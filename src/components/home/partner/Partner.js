import React, { Component } from 'react';
import Slider from "react-slick";

class Partner extends Component {
  render() {
    const settings = {

      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear",
      arrows: false,
      className: "style2 slick-partner"
    };
    return (
      <div className="partners">
        <div className="container">
          <div className="section-title">
            <h3>Our</h3>
            <h2>Partners</h2>
          </div>

          <Slider {...settings}>
            <div className="owl-item"><img src={require('./images/1.png')}/></div>
            <div className="owl-item"><img src={require('./images/2.png')}/></div>
            <div className="owl-item"><img src={require('./images/3.png')}/></div>
            <div className="owl-item"><img src={require('./images/4.png')}/></div>
            <div className="owl-item"><img src={require('./images/5.png')}/></div>
            <div className="owl-item"><img src={require('./images/6.png')}/></div>
            <div className="owl-item"><img src={require('./images/7.png')}/></div>
            <div className="owl-item"><img src={require('./images/8.png')}/></div>
            <div className="owl-item"><img src={require('./images/9.png')}/></div>
            <div className="owl-item"><img src={require('./images/10.png')}/></div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Partner;
