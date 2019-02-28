import React from 'react'

import './DashboardBottom.css'
import logo from '../../../../images/logo.png'

const DashboardBottom = () => {
    return (
        <div className='dashboard-bottom'>
                <a className="navbar-brand" href="#"><img className='logo' src={logo} alt='logo'></img></a>
            <div className='text'>@Copyright</div>
        </div>
    )   
}

export default DashboardBottom