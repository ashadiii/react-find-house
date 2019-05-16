import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faVideo, faImage, faMapMarkerAlt, faBed, faBath, faObjectGroup, faExchangeAlt, faWarehouse, faShareAlt, faHeart, faUser, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

class Portfolio extends Component {
  render() {
    const portfolioItems = {
      position: 'relative',
      height: '516.312px'
    },
    portfolioItemsLandscapes = {
      position: 'absolute',
      left: '0px; top: 0px'
    }
    return (      
      <section className="recently portfolio">
        <div className="container-fluid">
          <div className="section-title">
            <h3>Recently</h3>
            <h2>Properties</h2>
          </div>
          <div className="row portfolio-items">
            <div className="item col-lg-3 col-md-6 col-12 landscapes">
              <div className="project-single">
                <div className="project-inner project-head">
                  <div className="project-bottom">
                    <h4><a href="properties-details.html">View Property</a><span className="category">Real Estate</span></h4>
                  </div>
                  <div className="button-effect">
                    <a href="properties-details.html" className="btn"><i class="fa"><FontAwesomeIcon icon={faLink} /></i></a>
                    <a href="https://www.youtube.com/watch?v=2xHQqYRcrx4" className="btn popup-video popup-youtube"><i class="fa"><FontAwesomeIcon icon={faVideo} /></i></a>
                    <a className="img-poppu btn" href="images/feature-properties/fp-1.jpg" data-rel="lightcase:myCollection:slideshow"><i class="fa"><FontAwesomeIcon icon={faImage} /></i></a>
                  </div>
                  <div className="homes">

                    <a href="properties-details.html" className="homes-img">
                      <div className="homes-tag button alt featured">Featured</div>
                      <div className="homes-tag button alt sale">For Sale</div>
                      <div className="homes-price">Family Home</div>
                      <img src={require('../../../images/feature-properties/fp-1.jpg')} alt="home-1" className="img-responsive" />
                    </a>
                  </div>
                </div>

                <div className="homes-content">

                  <h3>Real House Luxury Villa</h3>
                  <p className="homes-address mb-3">
                    <a href="properties-details.html">
                      <i class="fa-map-marker"><FontAwesomeIcon icon={faMapMarkerAlt} /></i><span>Est St, 77 - Central Park South, NYC</span>
                    </a>
                  </p>

                  <ul className="homes-list clearfix">
                    <li>
                      <i><FontAwesomeIcon icon={faBed} /></i>
                      <span>6 Bedrooms</span>
                    </li>
                    <li>
                      <i><FontAwesomeIcon icon={faBath} /></i>
                      <span>3 Bathrooms</span>
                    </li>
                    <li>
                      <i><FontAwesomeIcon icon={faObjectGroup} /></i>
                      <span>720 sq ft</span>
                    </li>
                    <li>
                      <i><FontAwesomeIcon icon={faWarehouse} /></i>
                      <span>2 Garages</span>
                    </li>
                  </ul>

                  <div className="price-properties">
                    <h3 className="title mt-3">
                      <a href="properties-details.html">$ 230,000</a>
                    </h3>
                    <div className="compare">
                      <a href="#" title="Compare">
                        <i><FontAwesomeIcon icon={faExchangeAlt} /></i>
                      </a>
                      <a href="#" title="Share">
                        <i><FontAwesomeIcon icon={faShareAlt} /></i>
                      </a>
                      <a href="#" title="Favorites">
                        <i class="fa-heart-o"><FontAwesomeIcon icon={faHeart} /></i>
                      </a>
                    </div>
                  </div>
                  <div className="footer">
                    <a href="agent-details.html">
                      <i><FontAwesomeIcon icon={faUser} /></i> Jhon Doe
                    </a>
                    <span>
                        <i><FontAwesomeIcon icon={faCalendarAlt} /></i> 2 months ago
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item col-lg-3 col-md-6 col-12 landscapes">
              <div className="project-single">
                <div className="project-inner project-head">
                  <div className="project-bottom">
                    <h4><a href="properties-details.html">View Property</a><span className="category">Real Estate</span></h4>
                  </div>
                  <div className="button-effect">
                    <a href="properties-details.html" className="btn"><i class="fa"><FontAwesomeIcon icon={faLink} /></i></a>
                    <a href="https://www.youtube.com/watch?v=2xHQqYRcrx4" className="btn popup-video popup-youtube"><i class="fa"><FontAwesomeIcon icon={faVideo} /></i></a>
                    <a className="img-poppu btn" href="images/feature-properties/fp-1.jpg" data-rel="lightcase:myCollection:slideshow"><i class="fa"><FontAwesomeIcon icon={faImage} /></i></a>
                  </div>
                  <div className="homes">

                    <a href="properties-details.html" className="homes-img">
                      <div className="homes-tag button alt featured">Featured</div>
                      <div className="homes-tag button alt sale">For Sale</div>
                      <div className="homes-price">Family Home</div>
                      <img src={require('../../../images/feature-properties/fp-1.jpg')} alt="home-1" className="img-responsive" />
                    </a>
                  </div>
                </div>

                <div className="homes-content">

                  <h3>Real House Luxury Villa</h3>
                  <p className="homes-address mb-3">
                    <a href="properties-details.html">
                      <i class="fa-map-marker"><FontAwesomeIcon icon={faMapMarkerAlt} /></i><span>Est St, 77 - Central Park South, NYC</span>
                    </a>
                  </p>

                  <ul className="homes-list clearfix">
                    <li>
                      <i><FontAwesomeIcon icon={faBed} /></i>
                      <span>6 Bedrooms</span>
                    </li>
                    <li>
                      <i><FontAwesomeIcon icon={faBath} /></i>
                      <span>3 Bathrooms</span>
                    </li>
                    <li>
                      <i><FontAwesomeIcon icon={faObjectGroup} /></i>
                      <span>720 sq ft</span>
                    </li>
                    <li>
                      <i><FontAwesomeIcon icon={faWarehouse} /></i>
                      <span>2 Garages</span>
                    </li>
                  </ul>

                  <div className="price-properties">
                    <h3 className="title mt-3">
                      <a href="properties-details.html">$ 230,000</a>
                    </h3>
                    <div className="compare">
                      <a href="#" title="Compare">
                        <i><FontAwesomeIcon icon={faExchangeAlt} /></i>
                      </a>
                      <a href="#" title="Share">
                        <i><FontAwesomeIcon icon={faShareAlt} /></i>
                      </a>
                      <a href="#" title="Favorites">
                        <i class="fa-heart-o"><FontAwesomeIcon icon={faHeart} /></i>
                      </a>
                    </div>
                  </div>
                  <div className="footer">
                    <a href="agent-details.html">
                      <i><FontAwesomeIcon icon={faUser} /></i> Jhon Doe
                    </a>
                    <span>
                        <i><FontAwesomeIcon icon={faCalendarAlt} /></i> 2 months ago
                    </span>
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

export default Portfolio;
