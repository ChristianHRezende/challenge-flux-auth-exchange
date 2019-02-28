import React, { Component } from 'react'

import './SignInGoogleAuth.css'

import Speakeasy from 'speakeasy'
import QRCode from 'qrcode'

class SignInGoogleAuth extends Component {

    constructor(props) {
        super(props)
        this.state = {
            url: '',
            userToken: ''
        }
    }

    componentDidMount() {
        const localSecretUser = localStorage.getItem('user')
        console.log(localSecretUser)
        console.log(this.props.user)
        if (!localSecretUser || localSecretUser !== this.props.user) {
            const secret = Speakeasy.generateSecret()
            localStorage.setItem('user', this.props.user)
            localStorage.setItem('secret', secret.hex)

            QRCode.toDataURL(secret.otpauth_url, (err, dataUrl) => {
                err && console.log(err)
                this.setState({ url: dataUrl })
            })
        }
    }

    changeInputHandler = (event) => {
        this.setState({ userToken: event.target.value })
    }

    clickConfirmHandler = () => {
        const data = localStorage.getItem('secret')
        const verified = Speakeasy.totp.verify({
            secret: data,
            encoding: 'hex',
            token: this.state.userToken
        });
        console.log(verified)
    }

    render() {
        return (
            <div className='signin-form'>
                {this.state.url &&
                    <div>
                        <div><h5>Utilize o aplicativo mobile Google Authenticator para fazer a leitura do qrcode.</h5></div>
                        <div className='icon-form'><img className='logo' src={this.state.url} alt='QRCODE'></img></div>
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
            </div>
        )
    }
}

export default SignInGoogleAuth