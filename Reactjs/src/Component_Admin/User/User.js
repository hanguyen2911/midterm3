import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: [],
        }
    }

    componentDidUpdate() {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/user',
            data: null
        }).then(res => {
            this.setState({
                user: res.data
            }); console.log(res.data);
        }).catch(err => {
        });
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/user',
            data: null
        }).then(res => {
            this.setState({
                user: res.data
            }); console.log(res.data);
        }).catch(err => {
        });
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

    onEdit = (id) => {
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
            <>
                <main>

                    <div className="container-fluid">
                        <h1 className="mt-4">Dashboard</h1>
                        <Link to={`/admin/user/add`}>
                            <button className="button" style={{verticalAlign: 'middle'}}><span>Add User </span></button> 
                        </Link>
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className="fa fa-table mr-1" />
                                Thông tin người dùng
                            </div>
                            <div className="card-header">
                                <div className="row">
                                    <div class="col">Name</div>
                                    <div class="col">Phone</div>
                                    <div class="col">Avatar</div>
                                    <div class="col">address</div>
                                    <div class="col">email</div>
                                    <div class="col">Action</div>
                                </div>
                            </div>

                            {this.state.user.map((user, index) => {
                                return < EachUser
                                    key={index}
                                    user={user}
                                    onDelete={this.onDelete}
                                />
                            })}

                        </div>
                    </div>
                </main>
            </>
        );
    }
}


class EachUser extends Component {

    onDelete = (id) => {
        alert("ban chan chac muon xoa");
        this.props.onDelete(id);
    }

    render() {
        return (
            <div className="card-body">
                <div className="row">
                    <div class="col">{this.props.user.name}</div>
                    <div class="col">{this.props.user.phone}</div>
                    <div class="col"><img src={this.props.user.avatar} /></div>
                    <div class="col">{this.props.user.address}</div>
                    <div class="col">{this.props.user.email}</div>
                    <div class="col"><div className='row'><button type="button" className="btn btn-danger" onClick={() => this.onDelete(this.props.user.id)} >Delete</button>
                        <Link to={`/admin/user/${this.props.user.id}/edit`} className="btn btn-primary" >Edit </Link></div></div>
                </div>
            </div>
        );
    }
}


export default User;