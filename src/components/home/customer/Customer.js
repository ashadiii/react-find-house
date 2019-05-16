import React, { Component } from 'react';
import Slider from "react-slick";

class Customer extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <section class="testimonials">
        <div class="container">
          <div class="section-title col-md-5">
            <h3>Happy</h3>
            <h2>Customers</h2>
          </div>
          <Slider {...settings}>
            <div class="test-1">
              <h3>Lisa Smith</h3>
              <img src={require('./images/ts-1.jpg')} alt="" />
              <h6 class="mt-2">New York</h6>
              <ul class="starts text-center mb-2">
                <li><i class="fa fa-star"></i>
                </li>
                <li><i class="fa fa-star"></i>
                </li>
                <li><i class="fa fa-star"></i>
                </li>
                <li><i class="fa fa-star"></i>
                </li>
                <li><i class="fa fa-star"></i>
                </li>
              </ul>
              <p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor et sapien donec.</p>
            </div>

            <div class="test-1">
              <h3>Gary Steven</h3>
              <img src={require('./images/ts-4.jpg')} alt="" />
              <h6 class="mt-2">Philadelphia</h6>
              <ul class="starts text-center mb-2">
                <li><i class="fa fa-star"></i>
                </li>
                <li><i class="fa fa-star"></i>
                </li>
                <li><i class="fa fa-star"></i>
                </li>
                <li><i class="fa fa-star"></i>
                </li>
                <li><i class="fa fa-star-o"></i>
                </li>
              </ul>
              <p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor et sapien donec.</p>
            </div>

            <div class="test-1">
              <h3>Jhon Morris</h3>
              <img src={require('./images/ts-2.jpg')} alt="" />
              <h6 class="mt-2">Los Angeles</h6>
              <ul class="starts text-center mb-2">
                <li><i class="fa fa-star"></i>
                </li>
                <li><i class="fa fa-star"></i>
                </li>
                <li><i class="fa fa-star"></i>
                </li>
                <li><i class="fa fa-star"></i>
                </li>
                <li><i class="fa fa-star-o"></i>
                </li>
              </ul>
              <p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor et sapien donec.</p>
            </div>

            <div class="test-1">
              <h3>ddd Steven</h3>
              <img src={require('./images/ts-3.jpg')} alt="" />
              <h6 class="mt-2">Philadelphia</h6>
              <ul class="starts text-center mb-2">
                <li><i class="fa fa-star"></i>
                </li>
                <li><i class="fa fa-star"></i>
                </li>
                <li><i class="fa fa-star"></i>
                </li>
                <li><i class="fa fa-star"></i>
                </li>
                <li><i class="fa fa-star-o"></i>
                </li>
              </ul>
              <p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip venenatis. Vitae sit felis donec, suscipit tortor et sapien donec.</p>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}

export default Customer;
