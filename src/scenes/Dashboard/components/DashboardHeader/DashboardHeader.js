import React from 'react'
import './DashboardHeader.css'
import logo from '../../../../images/logo.png'

const DashboardHeader = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"><img className='logo' src={logo} alt='logo'></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse d-flex" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">ORDENS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">HISTÓRICO DO MERCADO</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">PENDÊNCIAS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">AJUDA</a>
                    </li>
                </ul>
            </div>
            <div className='d-flex direction-row justify-content-center align-items-center'>

                <div className="btn-group dropleft">
                    <button className="btn my-2 my-sm-0 button-user" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img className='icon-button mr-1' src={logo} alt='logo'></img>Rafael
                    </button>
                    <div className="dropdown-menu mr-3" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Meus dados</a>
                        <a className="dropdown-item" href="#">Sair</a>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default DashboardHeader