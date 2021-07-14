import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import router from '../../Router';



class Callrouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    }
    this.handleChangeName = this.handleChangeName.bind(this);
  }

  onSearch = () => {

  }
  handleChangeName(event) {
    this.setState({ name: event.target.value.toLowerCase() });
  }
  render() {
    return (
      <div>
        <header className=''>
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand" href="index.html"><h2>Four <em>Motobike</em></h2></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active" ><Link to="/">
                    <a className="nav-link" >Home
                  <span className="sr-only">(current)</span>
                    </a>
                  </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/1"> <a className="nav-link" >Our Products</a></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/2"> <a className="nav-link" > About Us</a></Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/3"> <a className="nav-link" > Contact Us</a></Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link to="/admin"> <a className="nav-link" >Adminpage</a></Link>
    </li> */}
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-user fa-fw" />
        </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link to="/10"><a className="dropdown-item" >Tài khoản</a> </Link>
                    <Link to="/11"><a className="dropdown-item" >Đăng nhập</a> </Link>
                      <a className="dropdown-item" >Đăng xuất</a>
                    </div>
                  </li>
                  

                </ul>
              </div>
            </div>
            <form>
              <div className="input-group">
                <input onChange={this.handleChangeName} name="search" type="text" className="form-control" placeholder="Search..." />
                <div className="input-group-append">
                  <Link to={`/${this.state.name}/search`}>
                    <button className="btn btn-secondary" type="button" style={{ backgroundColor: 'lemon' }}>
                      <i className="fa fa-search" />
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </nav>
        </header>

        <Switch>
          {this.showContentMenu(router)}
        </Switch>
      </div>
    );
  }
  showContentMenu = (router) => {
    var result = null;
    if (router.length > 0) {
      result = router.map((route, index) => {
        return (
          <Route key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  }
}

export default Callrouter;