import React, { Component } from "react";

class Popular extends Component {
  render() {
    return (      
      <section className="popular-places">
        <div className="container">
          <div className="section-title">
            <h3>Most Popular</h3>
            <h2>Places</h2>
          </div>
          <div className="row">
            <div className="col-md-12">
            </div>
            <div className="col-lg-4 col-md-6">

              <a href="properties-right-sidebar.html" className="img-box hover-effect">
                <img src={require('../../../images/popular-places/1.jpg')} className="img-responsive" alt="" />

                <div className="listing-badges">
                  <span className="featured">Featured</span>
                </div>
                <div className="img-box-content visible">
                  <h4>New York City </h4>
                  <span>203 Properties</span>
                </div>
              </a>
            </div>
            <div className="col-lg-8 col-md-6">

              <a href="properties-right-sidebar.html" className="img-box hover-effect">
                <img src={require('../../../images/popular-places/2.jpg')} className="img-responsive" alt="" />
                <div className="img-box-content visible">
                  <h4>Los Angeles</h4>
                  <span>307 Properties</span>
                </div>
              </a>
            </div>
            <div className="col-lg-8 col-md-6">

              <a href="properties-right-sidebar.html" className="img-box hover-effect no-mb">
                <img src={require('../../../images/popular-places/3.jpg')} className="img-responsive" alt="" />
                <div className="img-box-content visible">
                  <h4>San Francisco </h4>
                  <span>409 Properties</span>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6">

              <a href="properties-right-sidebar.html" className="img-box hover-effect no-mb x3">
                <img src={require('../../../images/popular-places/4.jpg')} className="img-responsive" alt="" />

                <div className="listing-badges">
                  <span className="featured">Featured</span>
                </div>
                <div className="img-box-content visible">
                  <h4>Miami</h4>
                  <span>507 Properties</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Popular;
