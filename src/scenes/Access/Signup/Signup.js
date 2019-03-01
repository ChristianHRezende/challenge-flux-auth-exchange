import React, { Component } from 'react'

import './SignUp.css'

import PageBottom from '../../../components/PageBottom/PageBottom';

import { auth } from '../../../firebase'

import SignUpForm from './SignUpForm/SignUpForm';
import SignUpEmailSend from './SignUpEmailSend/SignUpEmailSend';
import Spinner from '../../../components/Spinner/Spinner';

import { ToastsContainer, ToastsStore } from 'react-toasts'

class SignUp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isSuccess: false,
            isLoading: false,
            user: ''
        }
    }

    clickConfirmHandler = (form) => {
        this.setState({ isLoading: true })
        auth.createUserWithEmailAndPassword(form.email, form.password).then((result) => {
            console.log(result)       
            const user = auth.currentUser
            user.sendEmailVerification().then(()=> {
                this.setState({ isSuccess: true, isLoading: false, user: form.email })
            }).catch((error) =>{
                ToastsStore.error('Não foi possível enviar o e-mail de confirmação')
            });
        }).catch((error) => {
            /*var errorCode = error.code;
              var errorMessage = error.message; */
            this.setState({ isLoading: false })
            ToastsStore.error('Não foi possível realizar o cadastro, verifique se o e-mail ja não esta cadastrado')
        });
    }

    render() {
        return (
            <div>
                <div className='signin'>
                    {this.state.isLoading ? <Spinner />
                        : !this.state.isSuccess ? <SignUpForm onClickConfirm={this.clickConfirmHandler} />
                            : <SignUpEmailSend email={this.state.user} />
                    }
                </div>
                <ToastsContainer store={ToastsStore} />
                <PageBottom color={'#EEEEEE'} redirectIcon={'/dashboard'} />
            </div>
        )
    }
}

export default SignUp