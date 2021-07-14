import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import axios from 'axios';

export default class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            image: "",
            describe: "",
            price: "",
            cc: "",
            firm: "",
            species: "",
            color: "",
            role: true

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
                url: `http://localhost:3000/product/${id}`,
                data: null
            }).then(res => {
                this.setState({
                    id: res.data.id,
                    name: res.data.name,
                    image: res.data.image,
                    describe: res.data.describe,
                    price: res.data.price,
                    cc: res.data.cc,
                    firm: res.data.firm,
                    species: res.data.species,
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
                url: `http://localhost:3000/product/${id}`,
                data: {
                    name: this.state.name,
                    image: this.state.image,
                    describe: this.state.describe,
                    price: this.state.price,
                    cc: this.state.cc,
                    firm: this.state.firm,
                    species: this.state.species,
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
                                    <h2 className="text-center font-weight-light">Edit Product </h2><br />
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Product name</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Describe</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="describe" value={this.state.describe} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Price</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="price" value={this.state.price} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Cc</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="cc" value={this.state.cc} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Firm</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="firm" value={this.state.firm} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Species</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="species" value={this.state.species} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Image</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="file" name="image" onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <Link to="/admin/product" className="btn btn-danger" >Come back</Link>
                                  
                                    <button type="submit" className="btn btn-primary" >Save</button>
                                

                                </form>
                            </div>

                        </div>
                    </div>
                </main>
            </>
            // <>
            //     <main>
            //         <div className="container py-2">
            //             <div className="row my-2">

            //                 <div className="col-lg-8 order-lg-1 personal-info">

            //                     <form role="form" onSubmit={this.onSave}>
            //                         <h2 className="text-center font-weight-light">Edit Pruct </h2><br />
            //                         <div className="form-group row">
            //                             <label className="col-lg-3 col-form-label form-control-label">Product name</label>
            //                             <div className="col-lg-9">
            //                                 <input className="form-control" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            //                             </div>
            //                         </div>
            //                         <div className="form-group row">
            //                             <label className="col-lg-3 col-form-label form-control-label">Customer name</label>
            //                             <div className="col-lg-9">
            //                                 <input className="form-control" type="text" name="nameUse" value={this.state.nameUse} onChange={this.handleChange} />
            //                             </div>
            //                         </div>
            //                         <div className="form-group row">
            //                             <label className="col-lg-3 col-form-label form-control-label">Address</label>
            //                             <div className="col-lg-9">
            //                                 <input className="form-control" type="text"  name="address" value={this.state.address} onChange={this.handleChange} />
            //                             </div>
            //                         </div>
            //                         <div className="form-group row">
            //                             <label className="col-lg-3 col-form-label form-control-label">Phone</label>
            //                             <div className="col-lg-9">
            //                                 <input className="form-control" type="text"  name="phone" value={this.state.phone} onChange={this.handleChange} />
            //                             </div>
            //                         </div>
            //                         <div className="form-group row">
            //                             <label className="col-lg-3 col-form-label form-control-label">Quantity</label>
            //                             <div className="col-lg-9">
            //                                 <input className="form-control" type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange} />
            //                             </div>
            //                         </div>

            //                         <div className="form-group row">
            //                             <label className="col-lg-3 col-form-label form-control-label">Color</label>
            //                             <div className="col-lg-9">
            //                                 <input className="form-control" type="text" name="color" value={this.state.color} onChange={this.handleChange} />
            //                             </div>
            //                         </div>

            //                         <div className="form-group row">
            //                             <label className="col-lg-3 col-form-label form-control-label">Price</label>
            //                             <div className="col-lg-9">
            //                                 <input className="form-control" type="number"  name="price" value={this.state.price} onChange={this.handleChange} />
            //                             </div>
            //                         </div>

            //                         <Link to="/admin/product" className="btn btn-danger" >Come back</Link>
            //                         <button type="submit" className="btn btn-primary" >Save</button>

            //                     </form>
            //                 </div>

            //             </div>
            //         </div>



            //     </main>
            // </>

        );
    }
}


