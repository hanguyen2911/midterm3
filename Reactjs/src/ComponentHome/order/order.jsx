import React, { Component } from 'react';
import'./style.css';
class Order extends Component {
    render() {
        return (
            <div>
              
          <form action method="post">
        <div id="booking" className="section">
          <div className="section-center">
            <div className="container">
              <div className="row">
                <div className="booking-form">
                  <div className="form-header">
                    <h1>Order products</h1>
                  </div>
                  <div className="form-group">
                    <input className="form-control" type="text" placeholder="User1, User2, ..." defaultValue="" />
                    <span className="form-label">Your name</span>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input className="form-control" name="orderr" type="date" required />
                        <span className="form-label">Order at</span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input className="form-control" name="receive" type="date" required />
                        <span className="form-label">Receive at</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input className="form-control" name="total" type="number" required defaultValue="" />
                        <span className="form-label">Total price</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-btn">
                        <button className="submit-btn" name="order"><a > chi tiet don</a></button>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input className="form-control" name="address" type="tel" required defaultValue="" />
                        <span className="form-label">Address</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <span className="form-label">Email</span>
                        <input className="form-control" name="email" type="email" placeholder="Enter your Email" defaultValue="" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input className="form-control" type="tel" name="phone" placeholder="Enter you Phone" defaultValue="" />
                        <span className="form-label">Phone</span>
                      </div>
                    </div>
                  </div>
                  <div className="form-btn">
                    <button className="submit-btn" name="order">Order Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></form>
            </div>
        );
    }
}

export default Order