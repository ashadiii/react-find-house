import React, { Component } from 'react';

class Subscribe extends Component {
  render() {
    return (
      <section className="subscribe">
        <div className="realhome_subscribe">
          <div className="realhome container">
            <h2>Subscribe for Our Newsletter</h2>
            <div className="row align-center">
              <div className="col-lg-6 col-md-6">
                <form className="realhome_form_subscribe mailchimp form-inline" method="post" novalidate="true">
                  <input type="email" id="subscribeEmail" name="EMAIL" className="form_email" placeholder="Enter Your Email" />
                  <button type="submit" value="Subscribe">Submit</button>
                  <label for="subscribeEmail" className="error"></label>
                  <p className="subscription-success"></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Subscribe;
