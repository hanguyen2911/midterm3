import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            email: "",
            phone: "",
            address: "",
            password: "",
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
                    email: res.data.email,
                    phone: res.data.phone,
                    address: res.data.address,
                    avatar: res.data.avatar,
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
                    email: this.state.email,
                    phone: this.state.phone,
                    address: this.state.address,
                    avatar: this.state.avatar,
                    password: this.state.password
                }
            }).then(res => {
                history.goBack();
            }).catch(err => {
            });
        }
    }


    render() {
        return (
            <>
                <main>
                    <div className="container py-2">
                        <div className="row my-2">

                            <div className="col-lg-8 order-lg-1 personal-info">

                                <form onSubmit={this.onSave}>
                                    <h2 className="text-center font-weight-light">Edit User </h2><br />
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">User name</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Email</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Address</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="address" value={this.state.address} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Phone</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Avatar</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="file" name="image" value={this.state.image} onChange={this.handleChange} />
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
        );
    }
}

export default EditUser;