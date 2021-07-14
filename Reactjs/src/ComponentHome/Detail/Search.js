import React, { Component } from 'react';
import axios from 'axios';
import {  Link  } from "react-router-dom";

class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            product: [],
        }
    }
    componentDidUpdate() {
        setTimeout(() => {
            var { match } = this.props;
            if (match) {
                var name = match.params.name;
            axios({
                method: 'GET',
                url: `http://localhost:3000/product?name_like=${name}`,
                data: null
            }).then(res => {
                this.setState({
                    product: res.data
                }); console.log(res.data);
              
            })
         
        } },10) 
    }

    componentDidMount() {
        setTimeout(() => {
            var { match } = this.props;
            if (match) {
                var name = match.params.name;
            axios({
                method: 'GET',
                url: `http://localhost:3000/product?name_like=${name}`,
                data: null
            }).then(res => {
                this.setState({
                    product: res.data
                }); console.log(res.data);
                alert(" Have "+this.state.product.length+" product that you need to find!")
            })
         
        } },10)
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
                    <a href="#"><img src={this.props.product.image} alt="" style={{height:200}} /></a>
                    <div className="down-content">
                        <a href="#"><h4>{this.props.product.name}</h4></a>
                        <h6>${this.props.product.price}</h6>
                        <p>{this.props.product.firm}</p>
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
export default Search;