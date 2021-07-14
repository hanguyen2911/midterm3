import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class EditOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            nameUse: "",
            idUse: "",
            namePro: "",
            color: "",
            price: "",
            quantity: "",
            status: true,
            phone: "",
            address: ""
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
                url: `http://localhost:3000/order/${id}`,
                data: null
            }).then(res => {
                this.setState({
                    id: res.data.id,
                    nameUse: res.data.nameUse,
                    idUse: res.data.idUse,
                    namePro: res.data.namePro,
                    color: res.data.color,
                    price: res.data.price,
                    quantity: res.data.quantity,
                    status: true,
                    phone: res.data.phone,
                    address: res.data.address
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
                url: `http://localhost:3000/order/${id}`,
                data: {
                    id: this.state.id,
                    nameUse: this.state.nameUse,
                    idUse: this.state.idUse,
                    namePro: this.state.namePro,
                    color: this.state.color,
                    price: this.state.price,
                    quantity: this.state.quantity,
                    status: true,
                    phone: this.state.phone,
                    address: this.state.address
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
                                
                                <form role="form" onSubmit={this.onSave}>
                                    <h2 className="text-center font-weight-light">Edit Order </h2><br />
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Product name</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="namePro" value={this.state.namePro} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Customer name</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="nameUse" value={this.state.nameUse} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Address</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text"  name="address" value={this.state.address} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Phone</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text"  name="phone" value={this.state.phone} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Quantity</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Color</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="color" value={this.state.color} onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Price</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="number"  name="price" value={this.state.price} onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <Link to="/admin" className="btn btn-danger" >Come back</Link>
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

export default EditOrder;