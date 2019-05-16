import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

class Welcome extends Component {
  render() {
    return (      
      <section className="welcome">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="welcome-title">
                <h2>WELCOME TO <span>FIND HOUSES</span></h2>
                <h4>THE BEST PLACE TO FIND THE HOUSE YOU WANT.</h4>
              </div>
              <div className="welcome-content">
                <p> <span>FIND HOUSES</span> is the best place for elit, sed do eiusmod tempor dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et lorna aliquatd minimam, quis nostrud exercitation oris nisi ut aliquip ex ea.</p>
              </div>
              <div className="welcome-services">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-xs-12 ">
                    <div className="w-single-services">
                      <div className="services-img img-1">
                        <img src={require('../../../images/1.png')} width="32" alt="" />
                      </div>
                      <div className="services-desc">
                        <h6>Buy Property</h6>
                        <p>We have the best properties
                          <br/> elit, sed do eiusmod tempe</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12 ">
                    <div className="w-single-services">
                      <div className="services-img img-2">
                        <img src={require('../../../images/2.png')} width="32" alt=""/>
                      </div>
                      <div className="services-desc">
                        <h6>Rent Property</h6>
                        <p>We have the best properties
                          <br/> elit, sed do eiusmod tempe</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12 ">
                    <div className="w-single-services no-mb mbx">
                      <div className="services-img img-3">
                        <img src={require('../../../images/3.png')} width="32" alt=""/>
                      </div>
                      <div className="services-desc">
                        <h6>Real Estate Kit</h6>
                        <p>We have the best properties
                          <br/> elit, sed do eiusmod tempe</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-xs-12 ">
                    <div className="w-single-services no-mb">
                      <div className="services-img img-4">
                        <img src={require('../../../images/4.png')} width="32" alt=""/>
                      </div>
                      <div className="services-desc">
                        <h6>Sell Property</h6>
                        <p>We have the best properties
                          <br/> elit, sed do eiusmod tempe</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="wprt-image-video w50">
                <img alt="image" src={require('../../../images/projects/welcome.jpg')}/>
                <a className="icon-wrap popup-video popup-youtube" href="https://www.youtube.com/watch?v=2xHQqYRcrx4">
                  <i className="fa fa-play"><FontAwesomeIcon icon={faPlay} /></i>
                </a>
                <div className="iq-waves">
                  <div className="waves wave-1"></div>
                  <div className="waves wave-2"></div>
                  <div className="waves wave-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Welcome;
