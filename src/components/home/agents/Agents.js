import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Agents extends Component {
  render() {
    return (      
      <section className="team">
        <div className="container">
          <div className="section-title col-md-5">
            <h3>Meet Our</h3>
            <h2>Agents</h2>
          </div>
          <div className="row team-all">
            <div className="col-lg-3 col-md-6 team-pro hover-effect">
              <div className="team-wrap">
                <div className="team-img">
                  <img src={require('../../../images/team/t-5.jpg')} alt="" />
                </div>
                <div className="team-content">
                  <div className="team-info">
                    <h3>Carls Jhons</h3>
                    <p>Real Estate Agent</p>
                    <div className="team-socials">
                      <ul>
                        <li>
                          <a href="#" title="facebook"><i className="fa fa-facebook" aria-hidden="true"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i></a>
                          <a href="#" title="twitter"><i className="fa fa-twitter" aria-hidden="true"><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                          <a href="#" title="instagran"><i className="fa fa-instagram" aria-hidden="true"><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                        </li>
                      </ul>
                    </div>
                    <span><a href="agent-details.html">View Profile</a></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 team-pro hover-effect">
              <div className="team-wrap">
                <div className="team-img">
                  <img src={require('../../../images/team/t-6.jpg')} alt="" />
                </div>
                <div className="team-content">
                  <div className="team-info">
                    <h3>Arling Tracy</h3>
                    <p>Real Estate Agent</p>
                    <div className="team-socials">
                      <ul>
                        <li>
                          <a href="#" title="facebook"><i className="fa fa-facebook" aria-hidden="true"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i></a>
                          <a href="#" title="twitter"><i className="fa fa-twitter" aria-hidden="true"><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                          <a href="#" title="instagran"><i className="fa fa-instagram" aria-hidden="true"><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                        </li>
                      </ul>
                    </div>
                    <span><a href="agent-details.html">View Profile</a></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 team-pro pb-none hover-effect">
              <div className="team-wrap">
                <div className="team-img">
                  <img src={require('../../../images/team/t-7.jpg')} alt="" />
                </div>
                <div className="team-content">
                  <div className="team-info">
                    <h3>Mark Web</h3>
                    <p>Real Estate Agent</p>
                    <div className="team-socials">
                      <ul>
                        <li>
                          <a href="#" title="facebook"><i className="fa fa-facebook" aria-hidden="true"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i></a>
                          <a href="#" title="twitter"><i className="fa fa-twitter" aria-hidden="true"><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                          <a href="#" title="instagran"><i className="fa fa-instagram" aria-hidden="true"><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                        </li>
                      </ul>
                    </div>
                    <span><a href="agent-details.html">View Profile</a></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 team-pro hover-effect">
              <div className="team-wrap">
                <div className="team-img">
                  <img src={require('../../../images/team/t-8.jpg')} alt="" />
                </div>
                <div className="team-content">
                  <div className="team-info">
                    <h3>Katy Grace</h3>
                    <p>Real Estate Agent</p>
                    <div className="team-socials">
                      <ul>
                        <li>
                          <a href="#" title="facebook"><i className="fa fa-facebook" aria-hidden="true"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i></a>
                          <a href="#" title="twitter"><i className="fa fa-twitter" aria-hidden="true"><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                          <a href="#" title="instagran"><i className="fa fa-instagram" aria-hidden="true"><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                        </li>
                      </ul>
                    </div>
                    <span><a href="agent-details.html">View Profile</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Agents;
