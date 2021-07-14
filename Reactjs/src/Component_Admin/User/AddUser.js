import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            email: "",
            phone: "",
            address: "",
            avatar: "",
            role: "",

        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        var name = event.target.name;
        var value = event.target.value
        this.setState({ [name]: value });
    }


    onSave = (e) => {
        e.preventDefault();
        var { history } = this.props;
        axios({
            method: 'POST',
            url: 'http://localhost:3000/user',
            data: {
                id: this.state.id,
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                address: this.state.address,
                avatar: this.state.avatar,
                role: this.state.role,
            }
        }).then(res => {
            history.goBack();

        });
    }

    render() {
        return (
            <div>
                <>
                    <main>
                        <div className="container py-2">
                            <div className="row my-2">

                                <div className="col-lg-8 order-lg-1 personal-info">

                                    <form onSubmit={this.onSave}>
                                        <h2 className="text-center font-weight-light">Add User </h2><br />
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label">User name</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" name="name" onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label">Email</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" name="email" onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label">Phone</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" name="phone" onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label">Address</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="text" name="address" onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-lg-3 col-form-label form-control-label">Avatar</label>
                                            <div className="col-lg-9">
                                                <input className="form-control" type="file" name="avatar" onChange={this.handleChange} />
                                            </div>
                                        </div>

                                        <Link to="/admin/user" className="btn btn-danger" >Come back</Link>
                                        <button type="submit" className="btn btn-primary" >Save</button>

                                    </form>
                                </div>

                            </div>
                        </div>
                    </main>
                </>
            </div>
        );
    }
}

export default AddUser;