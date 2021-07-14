import React, { Component } from 'react';

class Features extends Component {
    render() {
        return (
            <div className="best-features">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-heading">
                    <h2>About Four Motobike</h2>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="left-content">
                    <h4>Looking for the best motobike?</h4>
                    <p>Bạn đang tìm kiếm cho mình một chiếc motobike, Bạn lo lắng về khả năng an toàn, độ bảo mật, chất lượng, tốc độ và chế độ bảo hành và bảo dưỡng. Đừng lo lắng hãy contact với chúng tôi để biết nhiều thông tin hơn. </p>
                    <ul className="featured-list">
                      <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                      <li><a href="#">Consectetur an adipisicing elit</a></li>
                      <li><a href="#">It aquecorporis nulla aspernatur</a></li>
                      <li><a href="#">Corporis, omnis doloremque</a></li>
                      <li><a href="#">Non cum id reprehenderit</a></li>
                    </ul>
                    <a href="about.html" className="filled-button">Read More</a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right-image">
                    <img src="assets/images/bestmoto.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Features;