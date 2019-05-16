import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope, faUser, faSignInAlt, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sticky: 0,
      open: false
    };
    this.handleScrollSticky = this.handleScrollSticky.bind(this);
  }

  componentDidMount(){
    window.addEventListener("scroll", this.handleScrollSticky);
  }
  componentWillUnmount() {
    window.addEventListener("scroll", null);
  }
  handleScrollSticky(sticky, event) {
      if(window.pageYOffset > 100) {
        this.setState({sticky: 1});
      }
      else {
        this.setState({sticky: 0});
      }
  }
  toggle() {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    const styleSticky = {
      display: (this.state.sticky === 1) ? "sticky" : "",
    };
    return (      
      <div className="header">
        <div className="header-top">
          <div className="container">
            <div className="top-info d-none d-md-flex">
              <div className="call-header">
                <p><i><FontAwesomeIcon icon={faPhone} /></i> (234) 0200 17813</p>
              </div>
              <div className="address-header">
                <p><i><FontAwesomeIcon icon={faMapMarkerAlt} /></i> 95 South Park Ave, USA</p>
              </div>
              <div className="mail-header">
                <p><i><FontAwesomeIcon icon={faEnvelope} /></i> info@findhouses.com</p>
              </div>
            </div>
            <div className="top-social d-none d-md-flex">
              <div className="login-wrap">
                <ul className="d-flex">
                  <li><a href="login.html"><i><FontAwesomeIcon icon={faUser} /></i> Login</a></li>
                  <li><a href="register.html"><i><FontAwesomeIcon icon={faSignInAlt} /></i> Register</a></li>
                </ul>
              </div>
              <div className="social-icons-header">
                <div className="social-icons">
                  <a href="#"><i><FontAwesomeIcon icon={['fab', 'facebook-f']} /></i></a>
                  <a href="#"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                  <a href="#"><i><FontAwesomeIcon icon={['fab', 'google-plus-g']} /></i></a>
                </div>
              </div>
              <div className="dropdown">
                <button className="btn-dropdown dropdown-toggle" type="button" id="dropdownlang" data-toggle="dropdown" aria-haspopup="true">
                  <img src={require('../../images/en.png')} alt="lang" /> English
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownlang">
                  <li><img src={require('../../images/fr.png')} alt="lang" />France</li>
                  <li><img src={require('../../images/de.png')} alt="lang" />German</li>
                  <li><img src={require('../../images/it.png')} alt="lang" />Italy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={"header-bottom heading sticky-header " + styleSticky.display} id="heading">
          <div className="container">
            <a href="index.html" className="logo">
              <img src={require('../../images/logo.svg')} alt="realhome" />
            </a>
            <button type="button" className="search-button" onClick={this.toggle.bind(this)}>
              <i><FontAwesomeIcon icon={faSearch} /></i>
            </button>
            <div className="get-quote d-md-none d-lg-inline-block">
              <a href="submit-property.html">
                <p>Submit Property</p>
              </a>
            </div>
            <button type="button" className="button-menu d-lg-none" data-toggle="collapse" data-target="#main-menu" aria-expanded="false">
              <i><FontAwesomeIcon icon={faBars} /></i>
            </button>

            <form action="#" id="bloq-search" className={"collapse" + (this.state.open ? ' show' : '')}>
              <div className="bloq-search">
                <input type="text" placeholder="search..." />
                <input type="submit" value="Search" />
              </div>
            </form>

            <nav id="main-menu" className="collapse">
              <ul>
                <li className="d-lg-none">
                  <div className="po">
                    <a data-toggle="collapse" href="#home" aria-expanded="false">Home</a>
                  </div>
                  <div className="collapse" id="home">
                    <div className="card card-block">
                      <a className="dropdown-item" href="index.html">Home Map</a>
                      <a className="dropdown-item" href="index-2.html">Home Image</a>
                      <a className="dropdown-item" href="index-3.html">Home Video</a>
                      <a className="dropdown-item" href="index-4.html">Home Slider</a>
                      <a className="dropdown-item" href="index-5.html">Horizontal Search</a>
                        <a className="dropdown-item" href="index-6.html">Parallax Image</a>
                        <a className="dropdown-item" href="index-7.html">Home 3D Video</a>
                        <a className="dropdown-item" href="index-8.html">Home Full Slider</a>
                      <a className="dropdown-item" href="index-9.html">Home Map style 2</a>
                        <a className="dropdown-item" href="index-10.html">Presentation Slider</a>
                      <a className="dropdown-item" href="index-11.html">Presentation Slider 2</a>
                        <a className="dropdown-item" href="index-12.html">Home Map style 3</a>
                    </div>
                  </div>
                </li>
                <li className="dropdown d-none d-lg-flex">
                  <a className="active dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">Home</a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="index.html">Home Map</a>
                    <a className="dropdown-item" href="index-2.html">Home Image</a>
                    <a className="dropdown-item" href="index-3.html">Home Video</a>
                    <a className="dropdown-item" href="index-4.html">Home Slider</a>
                    <a className="dropdown-item" href="index-5.html">Horizontal Search</a>
                    <a className="dropdown-item" href="index-6.html">Parallax Image</a>
                    <a className="dropdown-item" href="index-7.html">Home 3D Video</a>
                    <a className="dropdown-item" href="index-8.html">Home Full Slider</a>
                    <a className="dropdown-item" href="index-9.html">Home Map style 2</a>
                    <a className="dropdown-item" href="index-10.html">Presentation Slider</a>
                    <a className="dropdown-item" href="index-11.html">Presentation Slider 2</a>
                    <a className="dropdown-item" href="index-12.html">Home Map style 3</a>
                  </div>
                </li>
                <li><a href="contact-us.html">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
