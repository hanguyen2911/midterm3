import React, { Component } from "react";
import axios from "axios";

class Sign_up extends Component {
  url_users = "http://localhost:3000/users";
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      name: "",
      email: "",
      pass: "",
      phone: "",
      address: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  callAPI(url_api, method, body) {
    axios({
      method: method,
      url: url_api,
      data: body,
    })
      .then((res) => {
        this.setState({ result: res.data });
      })
      .catch((err) => {
        alert(err);
      });
  }

  onChange(event) {
    let key = event.target.name;
    let value = event.target.value;
    this.setState({ [key]: value });
  }

  componentDidMount() {
    this.callAPI(this.url_users, "GET", "");
  }

  sign_up = () => {
    const result = this.state.result.find(
      (row) => row.email === this.state.email
    );
    if (result == null) {
      let data = {
        name: this.state.name,
        pass: this.state.pass,
        phone: this.state.phone,
        email: this.state.email,
        address: this.state.address,
        status: 1,
      }
      this.callAPI(this.url_users, "POST", data);
    } else alert("Account already exists !!");
  };

  render() {
    return (
      <div id="signup">
        <form className="form">
          <p className="fieldset">
            <label className="image-replace username" htmlFor="signup-username">
              Username
            </label>
            <input
              className="full-width has-padding has-border"
              id="signup-username"
              type="text"
              placeholder="Username"
              name="name"
              onChange={this.onChange}
            />
          </p>
          <p className="fieldset">
            <label className="image-replace email" htmlFor="signup-email">
              E-mail
            </label>
            <input
              className="full-width has-padding has-border"
              id="signup-email"
              type="email"
              placeholder="E-mail"
              name="email"
              onChange={this.onChange}
            />
          </p>
          <p className="fieldset">
            <label className="image-replace password" htmlFor="signup-password">
              Password
            </label>
            <input
              className="full-width has-padding has-border"
              id="signup-password"
              type="password"
              placeholder="Password"
              name="pass"
              onChange={this.onChange}
            />
            <a href="#0" className="hide-password">
              Show
            </a>
          </p>
          <p className="fieldset">
            <label className="image-replace phone" htmlFor="signup-phone">
              Phone
            </label>
            <input
              className="full-width has-padding has-border"
              id="signup-phone"
              type="number"
              placeholder="Phone"
              name="phone"
              onChange={this.
                onChange}
            />
          </p>
          <p className="fieldset">
            <label className="image-replace Address" htmlFor="signup-Address">
              Address
            </label>
            <input
              className="full-width has-padding has-border"
              id="signup-Address"
              type="text"
              placeholder="Address"
              name="address"
              onChange={this.onChange}
            />
          </p>
          <p className="fieldset">
            <input
              className="full-width has-padding"
              type="submit"
              defaultValue="Create account"
              onClick={() => this.sign_up()}
            />
          </p>
        </form>
      </div>
    );
  }
}

export default Sign_up;
