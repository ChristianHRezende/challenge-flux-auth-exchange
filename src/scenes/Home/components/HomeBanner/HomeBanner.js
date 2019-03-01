import React from 'react'
import './HomeBanner.css'

import background from '../../../../images/background.png'
const HomeBanner = () => {
    return (
        <section id='banner'>
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
                                <input className='form-control '></input>
                            </div>
                            <div className='form-group'>
                                <button type='button' className='btn btn-secondary btn-open'>ABRA SUA CONTA</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeBanner