import React, { Component } from "react";
import "./Register.css";
import { isEmail } from "validator";
//import { callApi } from "./apiCaller";
//import { NavLink } from "react-router-dom";
import axios from "axios";

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
  togglePasswordVisiblity = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };

  validate = () => {
    const { name,
      email,
      password,
      password_confirmation } = this.state;
    let errors = {};
    if (name === "") errors.name = "Name can not be blank.";
    if (!isEmail(this.state.email)) errors.email = "Email must be valid.";
    if (email === "") errors.email = "Email can not be blank.";
    if (password === "") errors.password = "Password must be valid.";
    if (password_confirmation !== password) errors.password_confirmation = "Passwords must match.";

    return errors;
  }

  getInitialState = () => {
    this.setState({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const validation = this.validationForm()

    //Kiểm tra lỗi của input trong form và hiển thị
    if (validation.error) {
      alert(validation.msg)
    } else {
      alert('Submit form success')
    }
    const { name,
      email,
      password,
      password_confirmation } = this.state;
    console.log(name)
    var data = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }
    const errors = this.validate();

    if (Object.keys(errors).length === 0) {

      try { //Call an api here
        await axios.post("http://localhost:3000/users", data)
        this.props.history.push("/Login")
      } catch (error) {
        console.log("Register error: ", error);
      }
      this.setState(this.getInitialState()); //Resetting the form
    } else {
      this.setState({ errors });
    }
  }
  validationForm() {
    let returnData = {
      error: false,
      msg: ''
    }
    const { email, password } = this.state
    //Kiểm tra email
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      returnData = {
        error: true,
        msg: 'Không đúng định dạng email'
      }
    }
    //Kiểm tra password
    if (password.length < 8) {
      returnData = {
        error: true,
        msg: 'Mật khẩu phải lớn hơn 8 ký tự'
      }
    }
    return returnData;
  }
  render() {
    const { isPasswordShown } = this.state;
    const { name,
      email,
      password,
      password_confirmation } = this.state;

    return (

      <div className="register-wrapper">
        <div className="register-container">
          <header className="register-title">Register Form</header>

          <form className="register-form" onSubmit={this.handleSubmit}>
            <div className="register-input-field">
              <input
                placeholder="Your Name"
                id="name"
                value={name}
                name="name"
                onChange={(e) => this.onChange(e)}

              />
              {/* <span className="register-messages">{errors.name}</span> */}
            </div>

            <div className="register-input-field">
              <input
                placeholder="Email"
                id="email"
                value={email}
                //invalid={errors.email ? true : false}
                name="email"
                onChange={(e) => this.onChange(e)}
              //className={errors.email && touched.email && "error"}
              />
              {/* <span className="register-messages">{errors.email}</span> */}
            </div>

            <div className="register-input-field">
              <input
                placeholder="Password"
                id="password"
                value={password}
                type={isPasswordShown ? "text" : "password"}
                name="password"
                //invalid={errors.password ? true : false}
                onChange={(e) => this.onChange(e)}
              //className={errors.password && touched.password && "error"}
              />
              {/* <span className="register-messages">{errors.password}</span> */}
              <i
                className={`fa ${isPasswordShown ? "fa-eye-slash" : "fa-eye"} password-icon`}
                onClick={this.togglePasswordVisiblity}
              />
            </div>

            <div className="register-input-field">
              <input
                placeholder="Confirm Password"
                id="password_confirmation"
                value={password_confirmation}
                type={isPasswordShown ? "text" : "password"}
                name="password_confirmation"
                //invalid={errors.password_confirmation ? true : false}
                onChange={(e) => this.onChange(e)}
              />
              {/* <span className="register-messages">{errors.password_confirmation}</span> */}
              <i
                className={`fa ${isPasswordShown ? "fa-eye-slash" : "fa-eye"} password-icon`}
                onClick={this.togglePasswordVisiblity}
              />
            </div>
            <div className="register-button">
              <div className="register-btn-background"></div>
              <button>REGISTER</button>
            </div>
            <div className="register-text-center">
              {/* <small className="fogotPass"><NavLink to="/login">Already Account ? Login</NavLink></small> */}
            </div>
            <div class="social">
              <a class="circle github" href="#">
                <i class="fa fa-github fa-fw"></i>
              </a>
              <a id="google_login" class="circle google" href="#">
                <i class="fa fa-google-plus fa-fw"></i>
              </a>
              <a id="facebook_login" class="circle facebook" href="#">
                <i class="fa fa-facebook fa-fw"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    )
  }
}



/////////////////////////////////
// import React, { Component } from "react";
// import axios from "axios";

// class Sign_up extends Component {
//   url_users = "http://localhost:3000/users";
//   constructor(props) {
//     super(props);
//     this.state = {
//       result: [],
//       name:"",
//       email:"",
//       pass:"",
//       phone:"",
//       address:""
//     };
//     this.onChange=this.onChange.bind(this);
//   }

//   callAPI(url_api, method, body) {
//     axios({
//       method: method,
//       url: url_api,
//       data: body,
//     })
//       .then((res) => {
//         this.setState({ result: res.data });
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   }

//   onChange(event){
//     let key = event.target.name;
//     let value = event.target.value;
//     this.setState({[key]: value});
//   }

//   componentDidMount(){
//     this.callAPI(this.url_users, "GET", "");
//   }

//   sign_up = () => {
//     const result = this.state.result.find(
//       (row) => row.email === this.state.email
//     );
//     if (result == null) {
//       let data = {
//         name: this.state.name,
//         pass: this.state.pass,
//         phone: this.state.phone,
//         email: this.state.email,
//         address: this.state.address,
//         status: 1,
//       }
//       this.callAPI(this.url_users, "POST", data);
//     } else alert("Account already exists !!");
//   };

//   render() {
//     return (
//       <div id="signup">
//         <form className="form">
//           <p className="fieldset">
//             <label className="image-replace username" htmlFor="signup-username">
//               Username
//             </label>
//             <input
//               className="full-width has-padding has-border"
//               id="signup-username"
//               type="text"
//               placeholder="Username"
//               name="name"
//               onChange={this.onChange}
//             />
//           </p>
//           <p className="fieldset">
//             <label className="image-replace email" htmlFor="signup-email">
//               E-mail
//             </label>
//             <input
//               className="full-width has-padding has-border"
//               id="signup-email"
//               type="email"
//               placeholder="E-mail"
//               name="email"
//               onChange={this.onChange}
//             />
//           </p>
//           <p className="fieldset">
//             <label className="image-replace password" htmlFor="signup-password">
//               Password
//             </label>
//             <input
//               className="full-width has-padding has-border"
//               id="signup-password"
//               type="password"
//               placeholder="Password"
//               name="pass"
//               onChange={this.onChange}
//             />
//             <a href="#0" className="hide-password">
//               Show
//             </a>
//           </p>
//           <p className="fieldset">
//             <label className="image-replace phone" htmlFor="signup-phone">
//               Phone
//             </label>
//             <input
//               className="full-width has-padding has-border"
//               id="signup-phone"
//               type="number"
//               placeholder="Phone"
//               name="phone"
//               onChange={this.
// onChange}
//             />
//           </p>
//           <p className="fieldset">
//             <label className="image-replace Address" htmlFor="signup-Address">
//               Address
//             </label>
//             <input
//               className="full-width has-padding has-border"
//               id="signup-Address"
//               type="text"
//               placeholder="Address"
//               name="address"
//               onChange={this.onChange}
//             />
//           </p>
//           <p className="fieldset">
//             <input
//               className="full-width has-padding"
//               type="submit"
//               defaultValue="Create account"
//               onClick={()=>this.sign_up()}
//             />
//           </p>
//         </form>
//       </div>
//     );
//   }
// }

// export default Sign_up;
