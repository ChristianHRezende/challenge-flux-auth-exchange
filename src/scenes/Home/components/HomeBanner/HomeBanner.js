import React, { Component } from 'react'
import './HomeBanner.css'

import background from '../../../../images/background.png'
import arrow from '../../../../images/arrow.png'


class HomeBanner extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form: {
                email: ''
            }
        }
    }

    onChanceTextHandler = ({ target }) => {
        this.setState({
            form: { ...this.state.form, email: target.value }
        })
        console.log(target.value)
    }

    render() {
        return (
            <div id='banner'>
                <div className='banner'>
                    <img className='img' src={background} alt='background'></img>
                    <div className='banner-content'>
                        <div>
                            <h1 className='text-white'>SEJA UM INVESTIDOR DE</h1>
                            <h1 className='text-orange'>SUCESSO</h1>
                        </div>
                        <div className="form-open">
                            <form>
                                <div className='form-group'>
                                    <label className='label-form'>E-MAIL:</label>
                                    <input className='form-control' type='email' onChange={this.onChanceTextHandler} value={this.state.form.email}></input>
                                </div>
                                <div className='form-group'>
                                    <button type='button' className='btn btn-secondary btn-open' onClick={() => this.props.onClickSignup(this.state.form.email)}>ABRA SUA CONTA</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='bottom-banner'>
                    <div className='bottom-banner-text-container'>
                        <p className='bottom-banner-text'>SAIBA MAIS</p>
                    </div>
                    <div className='bottom-banner-icon-container'>
                        <a href='#home-info'><img className='arrow-button' src={arrow} alt='Aqui'></img></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeBanner