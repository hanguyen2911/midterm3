import React, { Component } from "react";
import axios from "axios";
import emailjs from "emailjs-com";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail, isEmpty } from "validator";
import { Link } from "react-router-dom";
import router from './../Router';

const required = (value) => {
  if (isEmpty(value)) {
    return (
      <small className="form-text text-danger">This field is required</small>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <small className="form-text text-danger">Invalid email format</small>
    );
  }
};

const Password = (value) => {
  if (value.trim().length < 8) {
    return (
      <small className="form-text text-danger">
        Password must be at least 8 characters long.
      </small>
    );
  }
};

class Sign_in extends Component {
  state = {
    email: "",
    password: "",
    random: 0,
    users: [],
  };

  //để cho getData() chạy trước postData()
  componentDidMount() {
    this.getData();
  }

  //get value at input
  onChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({
      [nam]: val,
    });
  };

  postData = (event) => {
    event.preventDefault();
    this.form.validateAll();

    var email = this.state.email;
    var password = this.state.password;
    var user = this.state.users;

    //check để kiểm tra đăng nhập
    let check = 0;
    
    for (var i = 0; i < user.length; i++) {     
      if (user[i].email === email) {
        if(user[i].block==true){
          check=1;
          alert("Your account has been locked!!!");
        }
        else{
          if (user[i].password === password) {
            check = 1;
            let login_account= {
              id: user[i].id,
              name: user[i].name
            }
            localStorage.setItem("loginAcc",JSON.stringify(login_account))
            alert("Logged in successfully!");
            window.location.href="http://localhost:3001"
          } else {
            check = 1;
            alert("Wrong password. Please check again!");
          }
        }
        
        break;
      }
    }
    if (check === 0) {
      alert("Your account does not exist. Please register!");
    }
  };
  // get data from db.json
  getData = (event) => {
    axios({
      method: "GET",
      url: "http://localhost:3000/user",
      data: null,
    })
      .then((res) => {
        this.setState({ users: res.data });
        console.log(this.state.users);
      })
      .catch((err) => {});
  };

  //function send the verification code
  sendEmail = () => {
    //random code
    var min = 1000;
    var max = 9999;
    var rands = Math.round(min + Math.random() * (max - min));

    //gán rand cho random tại state
    setTimeout(this.setState({ random: rands }), 1000); // 1000 ở đây tức là 1000 giây

    //get email at input
    var email = this.state.email;

    // var rands = this.state.random;

    emailjs
      .send(
        '75699',
        'template_c1saavd',
        {
          rand: rands,
          email: email,
        },
        'user_l8UeNhzujpYkQ8cTqn9YQ'
      )
      .then(
        (result) => {
        
        },
        (error) => {
        
        }
      );
  };

  forgot = () => {
    // event.preventDefault();

    this.sendEmail();

    setTimeout(() => {
      var code = prompt(
        "Please check your email for the confirmation code!",
      
      );

      if (code == this.state.random) {
        var newPass = prompt(
          "Confirmed success! Please enter a new password."
        );
        while (newPass.trim().length < 8) {
          alert("Password must be at least 8 characters long!");
          newPass = prompt(
            "Please enter new password to change your password:"
          );
        }
        var email = this.state.email;
        var user = this.state.users;

        for (var i = 0; i < user.length; i++) {
          if (user[i].email === email) {
            var id = user[i].id;
            var name = user[i].name;
            var address = user[i].address;
            var phone = user[i].phone;
            var avatar = user[i].avatar;
            var role = user[i].role;
            axios({
              method: "PUT",
              url: `http://localhost:3000/user/${id}`,
              data: {
                name: name,
                password: newPass,
                email: email,
                address: address,
                phone: phone,
                avatar: avatar,
                role: role,
              },
            }).then((res) => {
              alert("Update successfully!");
              window.location.reload();
            });
            break;
          }
        }
      } else {
        code = window.confirm(
          "Verification code wrong! Would you like to resend the code?"
        );
        if (code) {
          this.sendEmail();
          code = prompt(
            "Please check your email for the confirmation code!"
         
          );

          if (code == this.state.random) {
            newPass = prompt(
              "Confirmed success! Please enter a new password."
            );
            while (newPass.trim().length < 8) {
              alert("Password must be at least 8 characters long");
              newPass = prompt(
                "Please enter new password to change your password!"
              );
            }
            email = this.state.email;
            user = this.state.users;

            for (i = 0; i < user.length; i++) {
              if (user[i].email === email) {
                id = user[i].id;
                name = user[i].name;
                address = user[i].address;
                phone = user[i].phone;
                avatar = user[i].avatar;
                role = user[i].role;
                axios({
                  method: "PUT",
                  url: `http://localhost:3000/user/${id}`,
                  data: {
                    name: name,
                    password: newPass,
                    email: email,
                    address: address,
                    phone: phone,
                    avatar: avatar,
                    role: role,
                  },
                }).then((res) => {
                  alert("Password changed successfully!");
                  window.location.reload();
                });
                break;
              }
            }
          } else {
            alert("Your password change failed!");
          }
        } else {
          alert("Your password change failed!");
        }
      }
    }, 1000);
    
  };

  render() {
    return (
      <div id="login">
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 col-lg-5">
                <div className="wrap">
                  <div className="img" style={{ backgroundImage: 'url(./assets/images/moto2.jpg)' }} />
                  <div className="login-wrap p-4 p-md-5">
                    <div className="d-flex">
                      <div className="w-100">
                        <h3 className="mb-4">Sign In</h3>
                      </div>
                      <div className="w-100">
                        <p className="social-media d-flex justify-content-end">
                      <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook" /></a>
                          <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter" /></a>
                        </p>
                      </div>
                    </div>
                    <Form onSubmit={(e) => this.onSubmit(e)} ref={(c) => {this.form = c;}}>
                      <div className="form-group">
                        <Input name="email" onChange={this.onChange} type="text" placeholder="Email" className="form-control"validations={[required, email]}/>
                      </div>
                      <div className="form-group">
                        <Input name="password" onChange={this.onChange} type="password" placeholder="Password"className="form-control" validations={[required, Password]}/>
                      </div>
                      <br />
                      <button className="btn login-btn" type="submit" onClick={this.postData} >Login</button>
                      <CheckButton
                        style={{ display: "none" }}
                        ref={(c) => {
                          this.checkBtn = c;
                        }}
                      />
                      <div className="form-group d-md-flex">
                        <div className="w-50 text-left">
                          <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
                          <input type="checkbox" defaultChecked />
                            <span className="checkmark" />
                          </label>
                        </div>
                        <div className="w-50 text-md-right">
                          <a href="#!" className="forgot-password-link" onClick={this.forgot} >
                            Forgot password?
                          </a>
                        </div>
                      </div>
                      </Form>
                    {/* </form> */}
                    <p className="text-center">Not a member? <Link to='/signup' >Sign Up</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <br /><br /><br />
        <form className="form">
          <p className="fieldset">
            <label className="image-replace email" htmlFor="signin-email">
              E-mail
            </label>
            <input
              className="full-width has-padding has-border"
              id="signin-email"
              type="email"
              placeholder="E-mail"
            />
          </p>
          <p className="fieldset">
            <label className="image-replace password" htmlFor="signin-password">
              Password
            </label>
            <input
              className="full-width has-padding has-border"
              id="signin-password"
              type="password"
              placeholder="Password"
            />

          </p>
          <p className="fieldset">
            <input type="checkbox" id="remember-me" defaultChecked />
            <label htmlFor="remember-me">Remember me</label>
          </p>
          <p className="fieldset">
            <input
              className="full-width"
              type="submit"
              defaultValue="Login"
              onClick={() => this.sign_in()}
            />
          </p>
        </form>
        <p className="form-bottom-message">
          <a href="#0">Forgot your password?</a>
        </p>
        <a href="#0" className="close-form">
          Close
        </a> */}

      </div>
    );
  }
}

export default Sign_in;