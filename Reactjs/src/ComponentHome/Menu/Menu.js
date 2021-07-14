import React, { Component } from 'react';
import Header from './Header';
import BodyMemu from'./BodyMemu';
class Menu extends Component {
    render() {
        return (
            <div>
          <Header />
          <BodyMemu />
         
          </div>
        );
    }
}

export default Menu;