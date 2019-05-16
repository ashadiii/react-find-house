import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShareAlt } from '@fortawesome/free-solid-svg-icons';


class News extends Component {
  render() {
    return (
      <section className="blog-section">
        <div className="container">
          <div className="section-title">
            <h3>Latest</h3>
            <h2>News</h2>
          </div>
          <div className="news-wrap">
            <div className="row">
              <div className="col-xl-6 col-md-12 col-12">
                <div className="news-item news-item-sm">
                  <a href="blog-details.html" className="news-img-link">
                    <div className="news-item-img">
                      <img className="resp-img" src={require('./images/b-1.jpg')} alt="blog image" />
                    </div>
                  </a>
                  <div className="news-item-text">
                    <a href="blog-details.html"><h3>The Real Estate News</h3></a>
                    <span className="date">Jun 23, 2018 &nbsp;/&nbsp; By Admin</span>
                    <div className="news-item-descr">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div className="news-item-bottom">
                      <a href="blog-details.html" className="news-link">Read more...</a>
                      <ul className="action-list">
                        <li className="action-item"><i className="fa fa-heart"><FontAwesomeIcon icon={faHeart} /></i> <span>306</span></li>
                        <li className="action-item"><i className="fa fa-comment"><FontAwesomeIcon icon={faComment} /></i> <span>34</span></li>
                        <li className="action-item"><i className="fa fa-share-alt"><FontAwesomeIcon icon={faShareAlt} /></i> <span>122</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="news-item news-item-sm mb">
                  <a href="blog-details.html" className="news-img-link">
                    <div className="news-item-img">
                      <img className="resp-img" src={require('./images/b-2.jpg')} alt="blog image" />
                    </div>
                  </a>
                  <div className="news-item-text">
                    <a href="blog-details.html"><h3>The Real Estate News</h3></a>
                    <span className="date">Jun 23, 2018 &nbsp;/&nbsp; By Admin</span>
                    <div className="news-item-descr">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div className="news-item-bottom">
                      <a href="blog-details.html" className="news-link">Read more...</a>
                      <ul className="action-list">
                        <li className="action-item"><i className="fa fa-heart"><FontAwesomeIcon icon={faHeart} /></i> <span>306</span></li>
                        <li className="action-item"><i className="fa fa-comment"><FontAwesomeIcon icon={faComment} /></i> <span>34</span></li>
                        <li className="action-item"><i className="fa fa-share-alt"><FontAwesomeIcon icon={faShareAlt} /></i> <span>122</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12 col-12">
                <div className="news-item news-item-sm">
                  <a href="blog-details.html" className="news-img-link">
                    <div className="news-item-img">
                      <img className="resp-img" src={require('./images/b-3.jpg')} alt="blog image" />
                    </div>
                  </a>
                  <div className="news-item-text">
                    <a href="blog-details.html"><h3>The Real Estate News</h3></a>
                    <span className="date">Jun 23, 2018 &nbsp;/&nbsp; By Admin</span>
                    <div className="news-item-descr">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div className="news-item-bottom">
                      <a href="blog-details.html" className="news-link">Read more...</a>
                      <ul className="action-list">
                        <li className="action-item"><i className="fa fa-heart"><FontAwesomeIcon icon={faHeart} /></i> <span>306</span></li>
                        <li className="action-item"><i className="fa fa-comment"><FontAwesomeIcon icon={faComment} /></i> <span>34</span></li>
                        <li className="action-item"><i className="fa fa-share-alt"><FontAwesomeIcon icon={faShareAlt} /></i> <span>122</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="news-item news-item-sm">
                  <a href="blog-details.html" className="news-img-link">
                    <div className="news-item-img">
                      <img className="resp-img" src={require('./images/b-4.jpg')} alt="blog image" />
                    </div>
                  </a>
                  <div className="news-item-text">
                    <a href="blog-details.html"><h3>The Real Estate News</h3></a>
                    <span className="date">Jun 23, 2018 &nbsp;/&nbsp; By Admin</span>
                    <div className="news-item-descr">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div className="news-item-bottom">
                      <a href="blog-details.html" className="news-link">Read more...</a>
                      <ul className="action-list">
                        <li className="action-item"><i className="fa fa-heart"><FontAwesomeIcon icon={faHeart} /></i> <span>306</span></li>
                        <li className="action-item"><i className="fa fa-comment"><FontAwesomeIcon icon={faComment} /></i> <span>34</span></li>
                        <li className="action-item"><i className="fa fa-share-alt"><FontAwesomeIcon icon={faShareAlt} /></i> <span>122</span></li>
                      </ul>
                    </div>
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

export default News;
