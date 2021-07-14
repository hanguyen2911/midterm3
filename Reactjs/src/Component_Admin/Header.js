import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">

                <a className="navbar-brand" href="">AdminPage</a>
                <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href=""><i className="fa fa-bars" /></button>
                
                <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button"><i className="fa fa-search" /></button>
                        </div>
                    </div>
                </form>
                
                <ul className="navbar-nav ml-auto ml-md-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="userDropdown" href="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-user fa-fw" /></a>
                    </li>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="">Settings</a>
                        <a className="dropdown-item" href="">Activity Log</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="login.html">Logout</a>
                    </div>
                </ul>

            </nav>
        );
    }
}

export default Header;