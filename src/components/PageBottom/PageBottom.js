import React from 'react'
import { Link } from 'react-router-dom'

import './PageBottom.css'
import logo from '../../images/logo.png'

const PageBottom = ({ color = '', redirectIcon = '/' }) => {
    return (
        <div className='dashboard-bottom' style={color && { backgroundColor: color }}>
            <Link className="navbar-brand" to={redirectIcon}><img className='logo-bottom' src={logo} alt='logo'></img></Link>
            <div className='text'>@Copyright</div>
        </div>
    )
}

export default PageBottom