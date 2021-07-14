import React, { Component } from 'react';
import Header from'./Body/Header';
import Body from'./Body/Body';


class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
               
            </div>
        );
    }
}

export default Home;