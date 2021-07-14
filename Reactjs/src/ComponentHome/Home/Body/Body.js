import Features from'./features';
import ListProduct from'./listProduct';
import React, { Component } from 'react';

class Body extends Component {
    render() {
        return (
            <div>
               <ListProduct /> 
               <Features />
            </div>
        );
    }
}

export default Body;