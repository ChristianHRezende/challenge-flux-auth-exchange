import React, { Component } from 'react'

import './SignUpForm.css'

import logo from '../../../../images/logo.png'
import authenticatorImg from '../../../../images/google-authenticator.png'
import httpsImg from '../../../../images/ssl.png'
import { ToastsStore } from 'react-toasts';

class SignUpForm
    extends Component {

    constructor(props) {
        super(props)
        this.state = {
            form: {
                email: '',
                password: '',
                passwordConfirm: ''
            }
        }
    }

    componentDidMount = () => {
        if (this.props.email && this.props.email.includes('@')) {
            this.setState({ form: { ...this.state.form, email: this.props.email } })
        }
    }

    changeInputHandler = (event) => {
        const { target } = event
        if (target.id === 'email') {
            this.setState({ form: { ...this.state.form, email: target.value } })
        } else if (target.id === 'password') {
            this.setState({ form: { ...this.state.form, password: target.value } })
        }
        else if (target.id === 'passwordConfirm') {
            this.setState({ form: { ...this.state.form, passwordConfirm: target.value } })
        }
    }


    clickButtonConfirmHandler = () => {
        const { form } = this.state
        if (form.email && form.password && form.passwordConfirm) {
            const validEmail = this.validateEmail(form.email)
            let validPassword = false
            if (!validEmail) {
                ToastsStore.error('Verifique o campo e-mail')
            }

            if (form.password === form.passwordConfirm) {
                validPassword = this.validatePassword(form.password)
            } else {
                ToastsStore.error('As senhas não correspondem')
            }

            if (validEmail && validPassword) this.props.onClickConfirm(form)
        }
    }

    validateEmail = (email) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase());
    }

    validatePassword = (password) => {
        let valid = true
        let letters = /^[0-9a-zA-Z]+$/
        if (!password.match(letters)) {
            valid = false
            ToastsStore.error('As senhas devem conter apenas letras e números')
        }
        if (password.length < 8) {
            valid = false
            ToastsStore.error('As senhas devem conter no mínimo 8 caracteres')
        }
        return valid
    }

    render() {
        return (
            <div className='container'>
                <div className='signup-form'>
                    <div className='icon-form'><img className='logo' src={logo} alt='logo'></img></div>
                    <form>
                        <div className='form-group signup-form-group'>
                            <label>E-mail:</label>
                            <input id='email' className='form-control' type='email' value={this.state.form.email} onChange={this.changeInputHandler} />
                        </div>
                        <div className='form-group'>
                            <label>Senha:</label>
                            <input id='password' className='form-control' type='password' value={this.state.form.password} onChange={this.changeInputHandler} />
                        </div>
                        <div className='form-group'>
                            <label>Confirme a senha:</label>
                            <input id='passwordConfirm' className='form-control' type='password' value={this.state.form.passwordConfirm} onChange={this.changeInputHandler} />
                        </div>

                        <div className='signup-form-button-group'>
                            <button className='btn btn-secondary btn-confirm' type='button' onClick={this.clickButtonConfirmHandler}>Confirmar</button>
                        </div>
                    </form>
                </div>
                <div className='signup-imgs'>
                    <h4 className='sec-container-title'>SUA SEGURANÇA EM PRIMEIRO LUGAR</h4>
                    <div className='sec-container-imgs'>
                        <img className='sec-container-img' src={authenticatorImg} alt='authenticator' />
                        <img className='sec-container-img' src={httpsImg} alt='authenticator' />
                    </div>
                </div>
            </div>

        )
    }
}

export default SignUpForm
