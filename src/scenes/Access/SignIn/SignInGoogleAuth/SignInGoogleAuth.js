import React, { Component } from 'react'

import './SignInGoogleAuth.css'

import Speakeasy from 'speakeasy'
import QRCode from 'qrcode'
import { ToastsContainer, ToastsStore } from 'react-toasts'
import { Redirect } from 'react-router-dom'

class SignInGoogleAuth extends Component {

    constructor(props) {
        super(props)
        this.state = {
            url: '',
            userToken: '',
            redirect: false,
            user: '',
            secret: ''
        }
    }

    componentDidMount() {
        const localSecretUser = localStorage.getItem('user')
        if (!localSecretUser || localSecretUser !== this.props.user) {
            const secret = Speakeasy.generateSecret()

            QRCode.toDataURL(secret.otpauth_url, (err, dataUrl) => {
                err && console.log(err)
                this.setState({ url: dataUrl, user: this.props.user, secret: secret.hex })
            })
        } else {
            const secret = localStorage.getItem('secret')
            this.setState({ secret: secret, user: localSecretUser })
        }
    }

    changeInputHandler = (event) => {
        this.setState({ userToken: event.target.value })
    }

    clickConfirmHandler = () => {
        const data = this.state.secret
        const verified = Speakeasy.totp.verify({
            secret: data,
            encoding: 'hex',
            token: this.state.userToken
        });
        if (verified) {
            localStorage.setItem('user', this.props.user)
            localStorage.setItem('secret', data)
            this.setState({ redirect: true })
        } else {
            ToastsStore.error("Código incorreto")
        }
    }

    render() {
        if (this.state.redirect) return <Redirect to="/dashboard" />

        return (
            <div className='signin-form'>
                {this.state.url &&
                    <div>
                        <div><h5>Utilize o aplicativo mobile Google Authenticator para fazer a leitura do qrcode.</h5></div>
                        <div className='icon-form'><img className='img' src={this.state.url} alt='QRCODE'></img></div>
                    </div>
                }
                <form>
                    <div><h5>Entre com o código de validação mostrado pelo aplicativo Google Authenticator.</h5></div>
                    <div className='form-group'>
                        <input type='number' className='form-control' value={this.state.userToken} onChange={this.changeInputHandler} />
                    </div>
                    <div className='signinauth-form-button-group'>
                        <button className='btn btn-secondary btn-confirm' type='button' onClick={this.clickConfirmHandler}>Confirmar</button>
                    </div>
                </form>
                <ToastsContainer store={ToastsStore} />
            </div>
        )
    }
}

export default SignInGoogleAuth