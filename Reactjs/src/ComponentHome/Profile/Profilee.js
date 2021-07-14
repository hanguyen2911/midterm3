import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Profilee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: [],
            
        };
    }


    componentDidMount() {
        if(localStorage.getItem('loginAcc')){
            this.setState({
                user: JSON.parse(localStorage.getItem('loginAcc'))
            })
        }
        
    }



    render() {
        return (
            <div>
                <br />
                <div className="container rounded bg-white mt-5">
                    <div className="row">
                        <div className="col-md-4 border-right">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" src={this.state.user.avatar} width={90} /><span className="font-weight-bold">John Doe</span><span className="text-black-50">john_doe12@bbb.com</span><span>United States</span></div>
                        </div>
                        <div className="col-md-8">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    
                                    <h6 className="text-right">Your Profile</h6>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6"><input type="text" className="form-control" placeholder="first name" value={this.state.user.name} /> </div>
                                    {/* <div className="col-md-6"><input type="text" className="form-control" placeholder="last name"  /></div> */}
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6"><input type="text" className="form-control" placeholder="Email" value={this.state.user.email}  /></div>
                                    <div className="col-md-6"><input type="text" className="form-control" placeholder="Phone number" value={this.state.user.phone} /></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6"><input type="text" className="form-control" placeholder="address" value={this.state.user.address}  /></div>
                                    {/* <div className="col-md-6"><input type="text" className="form-control" placeholder="" /></div> */}
                                </div>
                                {/* <div className="row mt-3">
                                    <div className="col-md-6"><input type="text" className="form-control" placeholder="Bank Name" /></div>
                                    <div className="col-md-6"><input type="text" className="form-control" placeholder="Account Number" /></div>
                                </div> */}
                                <div className="mt-5 text-right"><Link to={`/${this.state.user.id}/10`} className="btn btn-primary profile-button" type="button">Edit Profile</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profilee;



