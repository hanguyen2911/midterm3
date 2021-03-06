import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }
    responseFacebook = response => {
        //console.log(response)

        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
    }
    componentClicked = () => console.log("Click");
    render() {
        let fbContent;

        if (this.state.isLoggedIn) {
            fbContent = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px'
                }}>
                    <img src={this.state.picture}></img>
                    <h2>Welcome {this.state.name}</h2>
                </div>
            );
        } else {
            fbContent = (<FacebookLogin
                appId="3944889445590969"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />);
        }
        return (
            <div>
                {fbContent}
            </div>
        );
    }
}

export default Facebook;
