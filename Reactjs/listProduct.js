import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link, Switch } from "react-router-dom";
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

    return (
      <div className="col-md-4">
        <div className="card product-item" style={{ width: '18rem' }}>
          <img className="card-img-top" src={this.props.product.image} alt="Card image cap" />
          <div className="card-body down-content">
            <a href="#"><h4 className="card-title text-left">{this.props.product.name}</h4></a>
            <h6>${this.props.product.price}</h6>
            <p className="card-text">{this.props.product.describe}</p>

            <p className="card-footer text-left">
              <ul className="stars">
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
                <li><i className="fa fa-star" /></li>
              </ul>

            </p>

            <p><Link to={`/${this.props.product.id}/4`} className="btn btn-primary text-left">Detail</Link></p>
          </div>

        </div>
      </div>
    );

  }
}

export default ListProduct;