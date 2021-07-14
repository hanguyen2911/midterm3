import React, { Component } from 'react';
import axios from 'axios';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: [],
      id: "",
      name: "",
      price: null,
      describe: "",
      cc: null,
      species: "",
      firm: "",
      image: "",
      color: "",
      status: ""
    }
  }

  onSaveCard = (arr) => {
    localStorage.setItem('listCard', JSON.stringify(arr))
  }
  onpha = () => {
    alert('khung');
  }

  onCard = () => {
    alert('thanh cong');
    var macdinh = this.state.card;
    var mang = [];
    var trung = 1;
    if (localStorage.getItem('listCard')) {
      macdinh.map((card, index) => {
        if (card.id == this.state.id) {
          trung = 2;
          macdinh.index.quantity = card.id++;

        }
      }

      );

      if (trung == 1) {
        mang = [
          {
            id: this.state.id,
            name: this.state.name,
            image: this.state.image,
            color: this.state.color,
            price: this.state.price,
            quantity: 1,
            describe: this.state.describe,
            firm: this.state.firm,
            CC: this.state.cc,
            species: this.state.species,

          }
        ];
        this.onSaveCard(mang);
        alert('thanh cong');
      } else if (trung == 2) {
        this.setState({
          card: macdinh
        });

        this.onSaveCard(this.state.card);

      }



    }
  }

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      console.log(id);
      axios({
        method: 'GET',
        url: `http://localhost:3000/product/${id}`,
        data: null
      }).then(res => {
        this.setState({
          id: res.data.id,
          name: res.data.name,
          price: res.data.price,
          describe: res.data.describe,
          cc: res.data.cc,
          species: res.data.species,
          image: res.data.image,
          firm: res.data.firm,
          color: res.data.color,
          status: res.data.color
        }); console.log(res.data);
      }).catch(err => {
      });
    }
    if (localStorage.getItem('listCard')) {
      this.setState({
        card: localStorage.getItem('listCard')
      })
    }
  }

  render() {
    return (
      <div>
        <br /> <br /> <br /> <br />
        <div className="container bootdey">
          <div className="col-md-12">
            <section className="panel">
              <div className="panel-body row">
                <div className="col-md-6">
                  <div className="pro-img-details">
                    <img src={this.state.image} alt="" />
                  </div>
                  { }
                </div>

                <div className="col-md-6">
                  <div className="row mt-3">
                    <h3>{this.state.name}</h3>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6"><strong>Describe: {this.state.describe} </strong></div>
                  </div>
                  <hr />
                  {/*  */}
                  <div className="row mt-2">
                    <div className="col-md-6">Firm: {this.state.firm}</div>
                    <div className="col-md-6">CC: {this.state.cc}</div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6"><strong>Price: </strong><span style={{ color: 'blue', fontSize: 20 }}>${this.state.price}</span></div>
                    <div className="col-md-6"><strong>Species: </strong>{this.state.species}</div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">Color: {this.state.color}</div>
                  </div>

                  {/*  */}

                  <hr />


                  <p className="star_buy">
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                      </div>
                      <div className="col-md-6">
                        <div className="btnBuy" style={{ marginLeft: 110 }} ><button className="btn btn-round btn-danger" onClick={() => this.onpha} type="button"><i className="fa fa-shopping-cart" />Add to Cart</button></div>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>


    );
  }
}



export default ProductDetail;