import React from 'react'

import './PageBottom.css'
import logo from '../../images/logo.png'

const PageBottom = (color = '') => {
    return (
        <div className='dashboard-bottom' style={color && { backgroundColor: color }}>
            <a className="navbar-brand" href="#"><img className='logo-bottom' src={logo} alt='logo'></img></a>
            <div className='text'>@Copyright</div>
        </div>
    )
}

export default PageBottom