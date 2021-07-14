import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link, Switch } from "react-router-dom";

class BodyMemu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            product: [],
        }
    }

    componentDidMount() {
        setTimeout(() => {
            axios({
                method: 'GET',
                url: 'http://localhost:3000/product',
                data: null
            }).then(res => {
                this.setState({
                    product: res.data
                }); console.log(res.data);
            }).catch(err => {
            });
        }, 10)
    }

    render() {
        return (
            <div className="products">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="filters">
                                <ul>
                                    <li className="active" data-filter="*">All Products</li>
                                    <li data-filter=".des">Featured</li>
                                    <li data-filter=".dev">Flash Deals</li>
                                    <li data-filter=".gra">Last Minute</li>
                                </ul>
                            </div>

                            <div className="filters-content">
                                <div className="row grid">
                                    {this.state.product.map((product, index) => {
                                        return < Items
                                            key={index}
                                            product={product}
                                        />
                                    })}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Items extends Component {
    render() {
        return (
            <div className="col-lg-4 col-md-4 all des">
                <div className="product-item" >
                    <img src={this.props.product.image} alt=""  style={{height:200}}/>
                    <div className="down-content">
                        <h4 className="text-left">{this.props.product.name}</h4>
                        <h6>${this.props.product.price}</h6>
                        <p>{this.props.product.describe}</p>
                        <ul className="stars">
                            <li><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star" /></li>
                            <li><i className="fa fa-star" /></li>
                        </ul>
                        <span><Link to={`/${this.props.product.id}/4`} >Detail <i className="fa fa-chevron-right" /></Link></span>
                    </div>
                </div>
            </div>




        );
    }
}

export default BodyMemu;