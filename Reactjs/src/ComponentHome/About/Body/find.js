import React, { Component } from 'react';

class Find extends Component {
    render() {
        return (
            <div className="find-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Our Location on Maps</h2>
              </div>
            </div>
            <div className="col-md-8">
              <div id="map">
                <iframe src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="330px" frameBorder={0} style={{border: 0}} allowFullScreen />
              </div>
            </div>
            <div className="col-md-4">
              <div className="left-content">
                <h4>About our office</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester consectetur similiqu consectetur.<br /><br />Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti.</p>
                <ul className="social-icons">
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                  <li><a href="#"><i className="fa fa-behance" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
        );
    }
}

export default Find;