import React, { Component } from 'react'

import './DashboardHome.css'

import bitcoinIcon from '../../../../images/coins/bitcoin.png'
import bitcoinCashIcon from '../../../../images/coins/bitcoincash.png'
import eosIcon from '../../../../images/coins/eos.png'
import etheriumIcon from '../../../../images/coins/etherium.png'
import litecoinIcon from '../../../../images/coins/litecoin.png'
import tetherIcon from '../../../../images/coins/tether.png'
import xrpIcon from '../../../../images/coins/xrp.png'
import Chart from '../Chart/Chart';

class DashboardHome extends Component {
    render() {
        return (
            <div className='dashboard-home'>
                <div className='options-container'>
                    <div className='options-buttons-container'>
                        <button className='option-button-buy'>COMPRAR</button>
                        <button className='option-button-sell'>VENDER</button>
                    </div>
                    <div className='info-coins-container'>
                        <h6>Seu saldo:</h6>
                        <table className='table'>
                            <tbody>
                                <tr className='info-coins-rt'>
                                    <td><div className='d-flex flex-row justify-content-around align-items-center'> <img className='mr-2' src={bitcoinIcon} alt='coin'/>00000000,00</div></td>
                                    <td><div className='d-flex flex-row justify-content-around align-items-center'> <img className='mr-2' src={bitcoinCashIcon} alt='coin'/>00000000,00</div></td>
                                </tr>
                                <tr className='info-coins-rt'>
                                    <td><div className='d-flex flex-row justify-content-around align-items-center'> <img className='mr-2' src={eosIcon} alt='coin'/>00000000,00</div></td>
                                    <td><div className='d-flex flex-row justify-content-around align-items-center'> <img className='mr-2' src={etheriumIcon} alt='coin'/>00000000,00</div></td>
                                </tr>
                                <tr className='info-coins-rt'>
                                    <td><div className='d-flex flex-row justify-content-around align-items-center'> <img className='mr-2' src={litecoinIcon} alt='coin'/>00000000,00</div></td>
                                    <td><div className='d-flex flex-row justify-content-around align-items-center'> <img className='mr-2' src={tetherIcon} alt='coin'/>00000000,00</div></td>
                                </tr>
                                <tr className='info-coins-rt'>
                                    <td><div className='d-flex flex-row justify-content-around align-items-center'> <img className='mr-2' src={xrpIcon} alt='coin'/>00000000,00</div></td>
                                    <td><div className='d-flex flex-row justify-content-around align-items-center'> <img className='mr-2' src={bitcoinCashIcon} alt='coin'/>00000000,00</div></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='chart-container'>
                    <Chart/>
                </div>
            </div>
        )
    }
}

export default DashboardHome