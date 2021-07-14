// import React, { Component } from "react";
// import "./Login.css";
// import  callApi  from "./apiCaller";

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     // this.state = this.getInitialState();
//     this.state = {
//       isPasswordShown: false,
//       data:{
//         username: "",
//         password: ""
//       },
//       errors:{}
//     }
//   }
  
//   // state = {
//   //   isPasswordShown: false
//   // };

//   togglePasswordVisiblity = () => {
//     const { isPasswordShown } = this.state;
//     this.setState({ 
//       isPasswordShown: !isPasswordShown
//     });
//   };

//   getInitialState = () => ({
//     data: {
//       username: "", 
//       password: ""
//     },
//     errors: {}
//   });

//   handleChange = (e) => {
//     this.setState({
//       data: {
//         ...this.state.data,
//         [e.target.name]: e.target.value
//       },
//       errors: {
//         ...this.state.errors,
//         [e.target.name]: ""
//       }
//     });
//   }

//   validate = () => {
//     const { data } = this.state;
//     let errors = {};
//     if (data.username === "") errors.username = "username can not be blank.";
//     if (data.password === "") errors.password = "Password must be valid.";
//     return errors;
//   }

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     const { data } = this.state;
//     const errors = this.validate();
//     if (Object.keys(errors).length === 0) {
//       console.log(data);
//       try {
//         const response = await callApi("/users", "POST", data)
//         console.log("Login -> handleSubmit -> response", response) // nen console de xem cau truc data cua API
//         // dong lay token
//         // response.data => la toan bo cuc Response Body cua cau truc API
//         const token = response.data.token //dong dau tien 
//         //dong lay cau truc data
//         const user = response.data.userPrinciple.user // dong 3,4
//         console.log("Login -> handleSubmit -> user", user)
//         console.log("Login -> handleSubmit -> token", token)
//         localStorage.setItem("_access_token", token) // luu token o tren localStorage
//         localStorage.setItem("_admin_user", JSON.stringify(user)) // luu user o tren localStorage
//         this.props.history.push("/Register") // -> go to home menu
//       } catch (error) {
//         console.log("Login error: ", error);
//       }
//       alert("login success")
//       this.setState(this.getInitialState());
      
//     } else {
//       this.setState({ errors });
//       alert("login không thành công")
//     }
//   }

//   render() {
//     const { isPasswordShown } = this.state;
//     const { data, errors } = this.state;
//     return (
//       <div className="login-wrapper">
//         <div className="login-container">
//           <header className="login-title">Login Form</header>
//           <form className="login-form" onSubmit={this.handleSubmit}>
//             <div className="login-input-field">
//               <input
//                 placeholder="username"
//                 id="username"
//                 value={data.username || ""}
//                 invalid={errors.username ? "true" : "false"}
//                 name="username"
//                 onChange={this.handleChange}
//               />
//               <span className="login-messages">{errors.username || ""}</span>
//             </div>

//             <div className="login-input-field">
//               <input
//                 placeholder="Password"
//                 id="password"
//                 value={data.password || ""}
//                 type={isPasswordShown ? "text" : "password"}
//                 name="password"
//                 invalid={errors.password ? "true" : "false"}
//                 onChange={this.handleChange}
//               />
//               <span className="login-messages">{errors.password || ""}</span>
//               <i
//                 className={`fa ${isPasswordShown ? "fa-eye-slash" : "fa-eye"} password-icon`}
//                 onClick={this.togglePasswordVisiblity}
//               />
//             </div>
//             <div className="login-button">
//               <div className="login-btn-background"></div>
//               <button type="submit">LOGIN</button>
//             </div>
//             {/* <div className="login-text-center">
//               <small className="fogotPass"><NavLink to="/register">Register</NavLink> | Fogot password ?</small>
//             </div> */}
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
// export default Login;



// // import React, { Component } from "react";
// // import "./Login.css";
// // import { callApi } from "./apiCaller";
// // import axios from "axios"; 

// // class Login extends Component {
// //   constructor(props) {
// //     super(props);
// //     // this.state = this.getInitialState();
// //     this.state = {
// //       isPasswordShown: false,
// //       data:{
// //         username: "",
// //         password: ""
// //       },
// //       errors:{}
// //     }
// //   }
  
 
// //   togglePasswordVisiblity = () => {
// //     const { isPasswordShown } = this.state;
// //     this.setState({ 
// //       isPasswordShown: !isPasswordShown
// //     });
// //   };

// //   getInitialState = () => ({
// //     data: {
// //       username: "", 
// //       password: ""
// //     },
// //     errors: {}
// //   });

// //   handleChange = (e) => {
// //     this.setState({
// //       data: {
// //         ...this.state.data,
// //         [e.target.name]: e.target.value
// //       },
// //       errors: {
// //         ...this.state.errors,
// //         [e.target.name]: ""
// //       }
// //     });
// //   }

// //   validate = () => {
// //     const { data } = this.state;
// //     let errors = {};
// //     if (data.username === "") errors.username = "username can not be blank.";
// //     if (data.password === "") errors.password = "Password must be valid.";
// //     return errors;
// //   }

// //   handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const { data } = this.state;
// //     const errors = this.validate();
// //     if (Object.keys(errors).length === 0) {
// //       console.log(data);
// //       try {
// //         const response = await axios.get('http://localhost:3000/users?username='+this.state.data.username+'&password='+this.state.data.password)
      		
// //         console.log("Login -> handleSubmit -> response", response) // nen console de xem cau truc data cua API
// //         // dong lay token
// //         // response.data => la toan bo cuc Response Body cua cau truc API
// //         const token = response.data.token //dong dau tien 
// //         //dong lay cau truc data
// //         const user = response.data // dong 3,4
// //         console.log("Login -> handleSubmit -> user", user)
// //         console.log("Login -> handleSubmit -> token", token)
// //         localStorage.setItem("_access_token", token) // luu token o tren localStorage
// //         localStorage.setItem("_admin_user", JSON.stringify(user)) // luu user o tren localStorage
// //         // this.props.history.push("/categories") // -> go to home menu
      
// //       } catch (error) {
// //         console.log("Login error: ", error);
// //       }
// //       alert("login success")
// //       this.setState(this.getInitialState());

// //     } else {
// //       this.setState({ errors });
// //     }
// //   }

// //   render() {
// //     const { isPasswordShown } = this.state;
// //     const { data, errors } = this.state;
// //     return (
// //       <div className="login-wrapper">
// //         <div className="login-container">
// //           <header className="login-title">Login Form</header>
// //           <form className="login-form" onSubmit={this.handleSubmit}>
// //             <div className="login-input-field">
// //               <input
// //                 placeholder="username"
// //                 id="username"
// //                 value={data.username || ""}
// //                 invalid={errors.username ? "true" : "false"}
// //                 name="username"
// //                 onChange={this.handleChange}
// //               />
// //               <span className="login-messages">{errors.username || ""}</span>
// //             </div>

// //             <div className="login-input-field">
// //               <input
// //                 placeholder="Password"
// //                 id="password"
// //                 value={data.password || ""}
// //                 type={isPasswordShown ? "text" : "password"}
// //                 name="password"
// //                 invalid={errors.password ? "true" : "false"}
// //                 onChange={this.handleChange}
// //               />
// //               <span className="login-messages">{errors.password || ""}</span>
// //               <i
// //                 className={`fa ${isPasswordShown ? "fa-eye-slash" : "fa-eye"} password-icon`}
// //                 onClick={this.togglePasswordVisiblity}
// //               />
// //             </div>
// //             <div className="login-button">
// //               <div className="login-btn-background"></div>
// //               <button type="submit">LOGIN</button>
// //             </div>
// //             {/* <div className="login-text-center">
// //               <small className="fogotPass"><NavLink to="/register">Register</NavLink> | Fogot password ?</small>
// //             </div> */}
// //           </form>
// //         </div>
// //       </div>
// //     );
// //   }
// // }
// // export default Login;

import React, { Component } from "react";
import axios from "axios";

class Sign_in extends Component {
  url_users = "http://localhost:3000/users";
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
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

  componentDidMount(){
    this.callAPI(this.url_users, "GET", "");
  }

  sign_in = () => {
    let email = document.getElementById("signin-email").value;
    let password = document.getElementById("signin-password").value;
    const result = this.state.result.find(
      (row) => row.email === email && row.password === password
    );
    if (result != null) {
      if (result.status === 0) {
        alert("your account has been locked ^.^");
      } else {
        localStorage.setItem("user", JSON.stringify(result))
        alert("your account has been  ^.^");
        window.location.reload();
        // this.props.history.push("/Register")

    };
    } else alert("Incorrect account or password !!");
  };

  render() {
    return (
      <div id="login">
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
            <a href="#0" className="hide-password">
              Show
            </a>
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
        </a>
      </div>
    );
  }
}

export default Sign_in;