import React, { Component } from 'react';
import { BrowserRouter as  Link } from "react-router-dom";
import axios from 'axios';

class Add extends Component {
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
    

    onSave = (e) => {
        e.preventDefault();
        var { history } = this.props;
        axios({
            method: 'POST',
            url: 'http://localhost:3000/product',
            data: {
                id: this.state.id,
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

        });
    }
    render() {
        return (
            <>
                <main>
                    <div className="container py-2">
                        <div className="row my-2">

                            <div className="col-lg-8 order-lg-1 personal-info">

                                <form onSubmit={this.onSave}>
                                    <h2 className="text-center font-weight-light">Add Product </h2><br />
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Product name</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="name" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Describe</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="describe" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Price</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="price" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Cc</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="cc" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Firm</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="firm" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-lg-3 col-form-label form-control-label">Species</label>
                                        <div className="col-lg-9">
                                            <input className="form-control" type="text" name="species" onChange={this.handleChange} />
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
            // <div className="container">
            //     <h2>ADD PRODUCTS</h2>
            //     <form onSubmit={this.onSave}>
            //         <div className="form-group">
            //             <label htmlFor="name">Name:</label>
            //             <input type="name" className="form-control" placeholder="Enter name" name="name" onChange={this.handleChange} />
            //         </div>
            //         <div className="form-group">
            //             <label htmlFor="pwd">Image:</label>
            //             <input type="" className="form-control" id="image" name="image" onChange={this.handleChange} />
            //         </div>
            //         <div className="form-group">
            //             <label htmlFor="pwd">Price:</label>
            //             <input type="number" className="form-control" placeholder="Enter price" name="price" onChange={this.handleChange} />
            //         </div>
            //         <button type="submit" className="btn btn-default">Submit</button>
            //     </form>
            // </div>
        );
    }
}

export default Add;