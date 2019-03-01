import React from 'react'
import './DashboardHeader.css'
import { Link } from 'react-router-dom'
import logo from '../../../../images/logo.png'

const DashboardHeader = ({ username = '', clickSignOut }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/dashboard"><img className='logo' src={logo} alt='logo'></img></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse d-flex" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link disabled" to="/orders">ORDENS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" to="/market">HISTÓRICO DO MERCADO</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" to="/pendences">PENDÊNCIAS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" to="/help">AJUDA</Link>
                    </li>
                </ul>
            </div>
            <div className='d-flex direction-row justify-content-center align-items-center'>
                <div className="btn-group dropleft">
                    <button className="btn my-2 my-sm-0 button-user" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img className='icon-button mr-1' src={logo} alt='logo'></img>{username.toString()}
                    </button>
                    <div className="dropdown-menu mr-3" aria-labelledby="dropdownMenuButton">
                        <Link className="dropdown-item" to="/dashboard/profile">Meus dados</Link>
                        <button className="dropdown-item" onClick={clickSignOut}>Sair</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default DashboardHeader