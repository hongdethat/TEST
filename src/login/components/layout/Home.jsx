import React, { Component } from 'react';
import firebase from '../config/firebase';
import { hashHistory } from 'react-router';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('GDrive2'));
        if (user) {
            this.setState({
                user
            })
        } else {
            this.props.history.push('/login');
            return;
        }
    }

    logout = () => {
        firebase.auth().signOut();
        localStorage.removeItem('GDrive2');
        this.props.history.push('/login');
    }

    render() {
        return (
            <div>
                <div className="login-wrapper" >
                    <img src={require("../asset/img/logo.png")} alt="logo" style={{ height: '120px' }} />
                    <h1 className="page-head" >Home</h1>
                    <p>You are Logged In {this.state.user.username}</p>
                    <p>You Email ID {this.state.user.email}</p>
                    <p>You Email UID {this.state.user.uid}</p>
                    <button className="login-btn" onClick={this.logout} >
                        <img src={require("../asset/img/google-plus.png")} alt="logo" style={{ height: '22px', marginRight: '10px' }} />
                       Logout
                    </button>
                </div>
            </div>
        )
    }
}
