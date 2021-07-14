import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import axios from 'axios';
// import Left from '.';

class ShowProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],

        }
        this.onDelete = this.onDelete.bind(this);

    }
    componentDidUpdate() {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/product',
            data: null
        }).then(res => {
            this.setState({
                products: res.data
            }); console.log(res.data);
        }).catch(err => {
        });
    }
    componentDidMount() {
        axios({
            method: 'GET',
            url: ' http://localhost:3000/product',
            data: null
        }).then(res => {
            this.setState({
                products: res.data
            }); console.log(res.data);
        }).catch(err => {
        });
    }

    onDelete = (id) => {
        axios({
            method: 'DELETE',
            url: ` http://localhost:3000/product/${id}`,
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
                        <h1 className="mt-4">Products</h1>
                        <Link to={`/admin/product/add`}>
                            <button className="button" style={{verticalAlign: 'middle'}}><span>Add Product </span></button> 
                        </Link>
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className="fa fa-table mr-1" />
                                Thông tin sản phẩm
                            </div>
                            <div className="card-header">
                                <th>
                                    <div className="row">
                                        <div class="col" style={{ marginLeft: 40 }}>Name</div>
                                        <div class="col" style={{ marginLeft: 75 }}>Describe</div>
                                        <div class="col" style={{ marginLeft: 60 }}>Image</div>
                                        <div class="col" style={{ marginLeft: 100 }}>Price</div>
                                        <div class="col" style={{ marginLeft: 95 }}>cc</div>
                                        <div class="col" style={{ marginLeft: 100 }}>Firm</div>
                                        <div class="col" style={{ marginLeft: 60 }}>Action</div>
                                    </div>
                                </th>
                            </div>

                            <tbody>
                                {this.state.products.map((product, index) => {
                                    return < Item
                                        key={index}
                                        product={product}
                                        onDelete={this.onDelete}
                                    />
                                })}
                            </tbody>

                        </div>
                    </div>
                </main>
            </>
        );
    }
}

class Item extends Component {
    onDelete = (id) => {
        alert("Bạn chắc chẵn muốn xóa nó");
        this.props.onDelete(id);

        console.log(id);
    }
    render() {
        return (
            <div className="card-body">
                <div className="row">
                    <div class="col">{this.props.product.name}</div>
                    <div class="col">{this.props.product.describe}</div>
                    <div class="col"><img src={this.props.product.image} /></div>
                    <div class="col">{this.props.product.price}</div>
                    <div class="col">{this.props.product.cc}</div>
                    <div class="col">{this.props.product.firm}</div>
                    {/* <div class="col">{this.props.order.species}</div> */}
                    <div class="col"><div className='row'><button type="button" className="btn btn-danger" onClick={() => this.onDelete(this.props.product.id)} >Delete</button>
                        <Link to={`/admin/product/${this.props.product.id}/edit`} className="btn btn-primary" >Edit </Link></div></div>
                </div>
            </div>
        );
    }
}

export default ShowProduct;