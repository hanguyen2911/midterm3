import React, { Component } from 'react';
import Find from './find';
import Send from './send';
import Happy from './Happy';
class Body extends Component {
    render() {
        return (
            <div>
                <Find />
                <Send />
                <Happy />
            </div>
        );
    }
}

export default Body;