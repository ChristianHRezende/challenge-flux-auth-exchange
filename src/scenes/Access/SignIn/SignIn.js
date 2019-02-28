import React, { Component } from 'react'

import './SignIn.css'

import PageBottom from '../../../components/PageBottom/PageBottom';

import { auth } from '../../../firebase'
import SignInForm from './SignInForm/SignInForm';
import SignInGoogleAuth from './SignInGoogleAuth/SignInGoogleAuth';
import Spinner from '../../../components/Spinner/Spinner';

class SignIn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isAuth: false,
            isLoading: false,
            user: ''
        }
    }

    clickConfirmHandler = (form) => {
        this.setState({ isLoading: true })
        auth.signInWithEmailAndPassword(form.email, form.password).then((result) => {
            console.log(result)
            this.setState({ isAuth: true, isLoading: false, user: form.email })
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
            this.setState({ isLoading: false })

        });
    }

    render() {
        return (
            <div>
                <div className='signin'>
                    {this.state.isLoading ? <Spinner />
                        : !this.state.isAuth ? <SignInForm onClickConfirm={this.clickConfirmHandler} />
                            : <SignInGoogleAuth user={this.state.user} />
                    }
                </div>
                <PageBottom color={'#EEEEEE'} />
            </div>
        )
    }
}

export default SignIn