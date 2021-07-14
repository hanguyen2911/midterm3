import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            phone: "",
            avatar: "",
            address: "",
            password: "",
            email: "",
            role: true
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var name = event.target.name;
        var value = event.target.value
        this.setState({ [name]: value });
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            console.log(id);
            axios({
                method: 'GET',
                url: `http://localhost:3000/user/${id}`,
                data: null
            }).then(res => {
                this.setState({
                    name: res.data.name,
                    phone: res.data.phone,
                    avatar: res.data.avatar,
                    address: res.data.address,
                    email: res.data.email,
                    password: res.data.password
                });
            }).catch(err => {
            });
        }
    }

    onSave = (e) => {
        e.preventDefault();
        var { history } = this.props;
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            axios({
                method: 'PUT',
                url: `http://localhost:3000/user/${id}`,
                data: {
                    name: this.state.name,
                    phone: this.state.phone,
                    avatar: this.state.avatar,
                    address: this.state.address,
                    email: this.state.email,
                    password: this.state.password
                }
            }).then(res => {
                history.goBack();
            }).catch(err => {
            });
        }
    }

    onDelete = (id) => {
        axios({
            method: 'DELETE',
            url: `http://localhost:3000/user/${id}`,
            data: null
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
        });
    }



    render() {
        return (
            <div>
                <br />
                <div className="container rounded bg-white mt-5">
                    <div className="row">
                        <div className="col-md-4 border-right">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" src={this.state.avatar}  />
                            <span className="font-weight-bold">{this.state.name}</span>
                            <span className="text-black-50">john_doe12@bbb.com</span>
                            <span>United States</span></div>
                        </div>
                        <div className="col-md-8">
                            <form className="p-3 py-5" onSubmit={this.onSave}>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="d-flex flex-row align-items-center back"><i className="fa fa-long-arrow-left mr-1 mb-1" />
                                    <Link to="/10"><h6>Back to home</h6></Link>
                                    </div>
                                    <h6 className="text-right">Your Profile</h6>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6"><input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange} /> </div>
                                    <div className="col-md-6"><input type="text" className="form-control"  onChange={this.handleChange}/></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6"><input type="text" className="form-control" name="email"  value={this.state.email} onChange={this.handleChange} /></div>
                                    <div className="col-md-6"><input type="text" className="form-control" value={this.state.phone} onChange={this.handleChange}/></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6"><input type="text" className="form-control" name="address"  value={this.state.address} onChange={this.handleChange} /></div>
                                    <div className="col-md-6"><input type="text" className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange} /></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6"><input type="text" className="form-control" placeholder="Bank Name" onChange={this.handleChange} /></div>
                                    <div className="col-md-6"><input type="text" className="form-control" placeholder="Account Number" onChange={this.handleChange}/></div>
                                </div>
                                <div className="mt-5 text-right"><button className="btn btn-primary profile-button" type="submit">Save Profile</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default EditProfile;



