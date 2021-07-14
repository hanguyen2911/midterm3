import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Right1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
        }
    }

    componentDidUpdate() {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/order',
            data: null
        }).then(res => {
            this.setState({
                orders: res.data
            }); console.log(res.data);
        }).catch(err => {
        });
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/order',
            data: null
        }).then(res => {
            this.setState({
                orders: res.data
            }); console.log(res.data);
        }).catch(err => {
        });
    }

    onDelete = (id) => {
        axios({
            method: 'DELETE',
            url: `http://localhost:3000/order/${id}`,
            data: null
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
        });
    }

    onEdit = (id) => {
        axios({
            method: 'DELETE',
            url: `http://localhost:3000/order/${id}`,
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
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item active">Dashboard/ Let's order for yourself a motobike</li>
                        </ol>
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className="fa fa-table mr-1" />
                                Thông tin đơn hàng
                            </div>
                            <div className="card-header">
                                <div className="row">
                                    <div class="col">Username</div>
                                    <div class="col">Product</div>
                                    <div class="col">Color</div>
                                    <div class="col">Price</div>
                                    <div class="col">Quantity</div>
                                    <div class="col">Phone</div>
                                    <div class="col">Address</div>
                                    <div class="col">Action</div>
                                </div>
                            </div>

                            {this.state.orders.map((order, index) => {
                                return < Order
                                    key={index}
                                    order={order}
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


class Order extends Component {

    onDelete = (id) => {
        alert("ban chan chac muon xoa");
        this.props.onDelete(id);
    }

    render() {
        return (
            <div className="card-body">
                <div className="row">
                    <div class="col">{this.props.order.nameUse}</div>
                    <div class="col">{this.props.order.namePro}</div>
                    <div class="col">{this.props.order.color}</div>
                    <div class="col">{this.props.order.price}</div>
                    <div class="col">{this.props.order.quantity}</div>
                    <div class="col">{this.props.order.phone}</div>
                    <div class="col">{this.props.order.address}</div>
                    <div class="col"><div className='row'><button type="button" className="btn btn-danger" onClick={() => this.onDelete(this.props.order.id)} >Delete</button>
                        <Link to={`/admin/${this.props.order.id}/editOrder`} className="btn btn-primary" >Edit </Link></div></div>
                </div>
            </div>
        );
    }
}




export default Right1;