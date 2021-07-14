import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch} from "react-router-dom";
import router from './Route';

class Left extends Component {



    render() {
        return (
            <BrowserRouter>
                {/* <Header /> */}
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <nav className="sb-sidenav  sb-sidenav-dark" id="sidenavAccordion">
                            <div className="sb-sidenav-menu">
                                <div className="nav ">
                                    <div className="sb-sidenav-menu-heading">Core</div>
                                    <a className="nav-link" href="">
                                        <Link to="/admin"><i className="sb-nav-link-icon"> Dashboard</i></Link>
                                    </a>
                                    <div className="sb-sidenav-menu-heading">Interface</div>
                                    <a className="nav-link collapsed" >
                                        <Link to= "/admin/user" ><i className="sb-nav-link-icon"> User</i></Link>
                                    </a>
                                    <a className="nav-link collapsed" >
                                        <Link to= "/admin/product"><i className="sb-nav-link-icon"> Product</i></Link>
                                    </a>
                                </div>
                            </div>
                            <div className="sb-sidenav-footer">
                                <div className="small">Develop by </div>
                                The new developers
                            </div>
                        </nav>
                    </div>
                    <div id="layoutSidenav_content">
                        <Switch>
                            {this.showContentMenu(router)}
                        </Switch>
                    </div>
                </div>
                {/* <Right /> */}
            </BrowserRouter>


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

export default Left;