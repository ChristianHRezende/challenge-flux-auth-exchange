import React from 'react'
import './HomeHeader.css'
import { Link } from 'react-router-dom'
import logo from '../../../../images/logo.png'

const HomeHeader = () => {
    return (
        <nav className="navbar navbar-expand-lg home-header">
            <Link className="navbar-brand" to="/dashboard"><img className='logo' src={logo} alt='logo'></img></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse d-flex" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link disabled" to="/orders">SOBRE</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" to="/market">COMECE A INVESTIR</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" to="/pendences">AJUDA</Link>
                    </li>
                </ul>
            </div>
            <div className='d-flex direction-row justify-content-between align-items-center'>
                <Link className='mr-2' to='/signin'><button type='button' className='btn btn-secondary button-signin'>Entrar</button></Link>
                <Link to='/signup'><button type='button' className='btn btn-secondary button-signup'>Cadastrar-se</button></Link>
            </div>
        </nav>
    )
}

export default HomeHeader