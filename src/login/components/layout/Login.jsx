import React, { Component } from 'react';
import firebase from '../config/firebase';
import { hashHistory } from 'react-router';
import { univ } from '../../../images/images';
import Logo from '../../../logo/Logo';
import { IoIosArrowRoundBack } from 'react-icons/io';
import '../css/style.css';

export default class Login extends Component {


    login = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                console.log(res)
                let user = res.user;
                let obj = {
                    username: user.displayName,
                    email: user.email,
                    uid: user.uid,
                    img: user.photoURL
                }
                localStorage.setItem('GDrive2', JSON.stringify(obj));
                this.props.history.push('/');
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div>
                <title>Đăng Nhập | WORLD SINGULARITY</title>
                <div className="login-wrapper" >
                    {/*<img src={require("../asset/img/logo.png")} alt="logo" style={{ height: '120px' }} />*/}
                    <div>
                        <img src={ univ } alt="background" className="Login__img__page"/>
{/*                        <div>
                            <p>Quay lại trang chủ</p>
                            <IoIosArrowRoundBack />
                        </div>*/}
                        <div className="Login__land__form__input">
                            <Logo />
                        </div>
                        <div className="Login__box__shadow">
                            <h3 style={{ color: 'white'}}>Đăng Nhập</h3>
                            <div className="Login__size">
                                <input type="email" placeholder="Nhập địa chỉ email" className="Login__input__form"/>
                            </div>
                            <div className="Login__size">
                                <input type="password" placeholder="Nhập mật khẩu" className="Login__input__form"/>
                            </div>
                        </div>
                    </div>
                   {/* <button className="login-btn" onClick={this.login} >
                        <img src={require("../asset/img/google-plus.png")} alt="logo" style={{ height: '22px', marginRight: '10px' }} />
                        Sign In With Google
                    </button>*/}
                </div>
            </div>
        )
    }
}
