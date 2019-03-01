import React, { Component } from 'react'

import './SignInForm.css'

import logo from '../../../../images/logo.png'

class SignInForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            form: {
                email: '',
                password: ''
            }
        }
    }

    changeInputHandler = (event) => {
        const { target } = event
        if (target.id === 'email') {
            this.setState({ form: { ...this.state.form, email: target.value } })
        } else if (target.id === 'password') {
            this.setState({ form: { ...this.state.form, password: target.value } })
        }
    }

    clickButtonConfirmHandler = () => {
        const { form } = this.state
        if (form.email && form.password) {
            this.props.onClickConfirm(form);
        }
    }

    render() {
        return (
            <div className='signin-form'>
                <div className='icon-form'><img className='logo' src={logo} alt='logo'></img></div>
                <form>
                    <div className='form-group signin-form-group'>
                        <label>E-mail:</label>
                        <input id='email' className='form-control' type='email' value={this.state.form.email} onChange={this.changeInputHandler} />
                    </div>
                    <div className='form-group'>
                        <label>Senha:</label>
                        <input id='password' className='form-control' type='password' value={this.state.form.password} onChange={this.changeInputHandler} />
                    </div>
                    <div className='signin-form-button-group'>
                        <button className='btn btn-secondary btn-confirm' type='button' onClick={this.clickButtonConfirmHandler}>Confirmar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignInForm