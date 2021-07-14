import React, { Component } from "react";
import axios from "axios";
import emailjs from "emailjs-com";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail, isEmpty } from "validator";
import { Link } from "react-router-dom";
import router from './../Router';


export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      name: null,
      email: null,
      password: null,
      password_confirmation: null,
      isPasswordShown: false,
      error: {}
    };
  }

  onChange = (event) => {
    console.log(event);
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  }

  handleChange(event) {
    var name = event.target.name;
    var value = event.target.value
    this.setState({ [name]: value });
  }


onSubmit = (e) => {
    e.preventDefault();
    var { history } = this.props;
    axios({
        method: 'POST',
        url: 'http://localhost:3000/user',
        data: {
            id: this.state.id,
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,           

        }
    }).then(res => {
        history.goBack();

    });
}

  // togglePasswordVisiblity = () => {
  //   const { isPasswordShown } = this.state;
  //   this.setState({ isPasswordShown: !isPasswordShown });
  // };

  // validate = () => {
  //   const { name,
  //     email,
  //     password,
  //     password_confirmation } = this.state;
  //   let errors = {};
  //   if (name === "") errors.name = "Name can not be blank.";
  //   if (!isEmail(this.state.email)) errors.email = "Email must be valid.";
  //   if (email === "") errors.email = "Email can not be blank.";
  //   if (password === "") errors.password = "Password must be valid.";
  //   if (password_confirmation !== password) errors.password_confirmation = "Passwords must match.";
  //   return errors;
  // }

  // getInitialState = () => {
  //   this.setState({
  //     name: "",
  //     email: "",
  //     password: "",
  //     password_confirmation: "",
  //   });
  // }

  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const validation = this.validationForm()
  //   //Kiểm tra lỗi của input trong form và hiển thị
  //   if (validation.error) {
  //     alert(validation.msg)
  //   } else {
  //     alert('Submit form success')
  //   }
  //   const { name,
  //     email,
  //     password,
  //     password_confirmation } = this.state;
  //   console.log(name)
  //   var data = {
  //     name: name,
  //     email: email,
  //     password: password,
  //     password_confirmation: password_confirmation
  //   }
  //   const errors = this.validate();

  //   if (Object.keys(errors).length === 0) {

  //     try { //Call an api here
  //       await axios.post("http://localhost:3000/users", data)
  //       this.props.history.push("/Login")
  //     } catch (error) {
  //       console.log("Register error: ", error);
  //     }
  //     this.setState(this.getInitialState()); //Resetting the form
  //   } else {
  //     this.setState({ errors });
  //   }
  // }

  // validationForm() {
  //   let returnData = {
  //     error: false,
  //     msg: ''
  //   }
  //   const { email, password } = this.state
  //   //Kiểm tra email
  //   const re = /\S+@\S+\.\S+/;
  //   if (!re.test(email)) {
  //     returnData = {
  //       error: true,
  //       msg: 'Không đúng định dạng email'
  //     }
  //   }
  //   //Kiểm tra password
  //   if (password.length < 8) {
  //     returnData = {
  //       error: true,
  //       msg: 'Mật khẩu phải lớn hơn 8 ký tự'
  //     }
  //   }
  //   return returnData;
  // }

  render() {
    const { isPasswordShown } = this.state;
    const { name,
      email,
      password,
      password_confirmation } = this.state;
    return (
      <div id="login">
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 col-lg-5">
                <div className="wrap">
                  <div className="img" style={{ backgroundImage: 'url(./assets/images/moto3.jpg)' }} />
                  <div className="login-wrap p-4 p-md-5">
                    <div className="d-flex">
                      <div className="w-100">
                        <h3 className="mb-4">Sign Up</h3>
                      </div>
                      <div className="w-100">
                        <p className="social-media d-flex justify-content-end">
                      <Link to='/home/facebook' className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook" /></Link>
                          <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter" /></a>
                        </p>
                      </div>
                    </div>
                    <Form onSubmit={(e) => this.onSubmit(e)} ref={(c) => {this.form = c;}}>
                      <div className="form-group">
                        <Input name="email" onChange={this.onChange} type="text" placeholder="Email" className="form-control" required/>
                      </div>
                      <div className="form-group">
                        <Input name="password" onChange={this.onChange} type="password" placeholder="Password"className="form-control" required/>
                      </div>
                      <div className="form-group">
                        <Input name="password_confirmation" onChange={this.onChange} type="password" placeholder="Confirm password"className="form-control" required/>
                      </div>
                      <br />
                      <button className="btn login-btn" type="submit" onClick={this.postData} >Register</button>
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
                    <p className="text-center">You are a member? <Link to='/11' >Login</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      // <div className="register-wrapper">
      //   <br/><br/><br/><br/>
      //   <div className="register-container">
      //     <header className="register-title">Register Form</header>
      //     <form className="register-form" onSubmit={this.handleSubmit}>
      //       <div className="register-input-field">
      //         <input
      //           placeholder="Your Name"
      //           id="name"
      //           value={name}
      //           name="name"
      //           onChange={(e) => this.onChange(e)}
      //         />
      //         {/* <span className="register-messages">{errors.name}</span> */}
      //       </div>
      //       <div className="register-input-field">
      //         <input
      //           placeholder="Email"
      //           id="email"
      //           value={email}
      //           //invalid={errors.email ? true : false}
      //           name="email"
      //           onChange={(e) => this.onChange(e)}
      //         //className={errors.email && touched.email && "error"}
      //         />
      //         {/* <span className="register-messages">{errors.email}</span> */}
      //       </div>

      //       <div className="register-input-field">
      //         <input
      //           placeholder="Password"
      //           id="password"
      //           value={password}
      //           type={isPasswordShown ? "text" : "password"}
      //           name="password"
      //           //invalid={errors.password ? true : false}
      //           onChange={(e) => this.onChange(e)}
              
      //         />
             
      //         <i
      //           className={`fa ${isPasswordShown ? "fa-eye-slash" : "fa-eye"} password-icon`}
      //           onClick={this.togglePasswordVisiblity}
      //         />
      //       </div>

      //       <div className="register-input-field">
      //         <input
      //           placeholder="Confirm Password"
      //           id="password_confirmation"
      //           value={password_confirmation}
      //           type={isPasswordShown ? "text" : "password"}
      //           name="password_confirmation"
      //           //invalid={errors.password_confirmation ? true : false}
      //           onChange={(e) => this.onChange(e)}
      //         />
      //         {/* <span className="register-messages">{errors.password_confirmation}</span> */}
      //         <i
      //           className={`fa ${isPasswordShown ? "fa-eye-slash" : "fa-eye"} password-icon`}
      //           onClick={this.togglePasswordVisiblity}
      //         />
      //       </div>
      //       <div className="register-button">
      //         <div className="register-btn-background"></div>
      //         <button>REGISTER</button>
      //       </div>
      //       <div className="register-text-center">
      //         {/* <small className="fogotPass"><NavLink to="/login">Already Account ? Login</NavLink></small> */}
      //       </div>
      //       <div className="social">
      //         <a className="circle github" href="#">
      //           <i className="fa fa-github fa-fw"></i>
      //         </a>
      //         <a id="google_login" className="circle google" href="#">
      //           <i className="fa fa-google-plus fa-fw"></i>
      //         </a>
      //         <a id="facebook_login" className="circle facebook" href="#">
      //           <i className="fa fa-facebook fa-fw"></i>
      //         </a>
      //       </div>
      //     </form>
      //   </div>
      // </div>
    )
  }
}



