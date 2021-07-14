import React, { Component } from 'react';
import axios from 'axios';
import {  Link } from "react-router-dom";
//  import Search from './../../../Search/Search';

class ListProduct extends Component {

  constructor(props) {
    super(props)
    this.state = {
      product: [],
      tasks: [],
      filter: {
        name: "",
        status: -1
      },
      keyword: "name 1",
    }

  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/product',
      data: null
    }).then(res => {
      this.setState({
        product: res.data,
      }); console.log(res.data);
    }).catch(err => {
    });
  }

  onSearch = (keyword) => {
    console.log(keyword)
  }

  render() {
    var { keyword, product } = this.state;
    return (
      <div className="latest-products">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Promotion Products </h2>
                <Link to="/1"> <a className="nav-link" >view all products
                <i className="fa fa-angle-right" /></a></Link>
              </div>
            </div>
            {/* <Search onSearch={this.onSearch} /> */}


            {this.state.product.map((product, index) => {
              if (product.status == "promo") {
                return < Item
                  key={index}
                  product={product}
                />
              }
            })}

          </div></div></div>
    );
  }
}

class Item extends Component {
  render() {
    return (<div className="col-md-4">
      <div className="product-item">
        <div ><img src={this.props.product.image} alt="" style={{height:200}} /></div>
        <div className="down-content ">
          <Link to={`/${this.props.product.id}/4`} className="text-left"><h4>{this.props.product.name}</h4></Link>
          <h6>${this.props.product.price}</h6>
          <p>{this.props.product.describe}</p>
          <ul className="stars">
            <li><i className="fa fa-star" /></li>
            <li><i className="fa fa-star" /></li>
            <li><i className="fa fa-star" /></li>
            <li><i className="fa fa-star" /></li>
            <li><i className="fa fa-star" /></li>
          </ul>
          <span>Reviews (24)</span>
        </div>
      </div>
    </div>);
  }
}
export default ListProduct;