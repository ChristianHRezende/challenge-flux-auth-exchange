import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Link to='/signin'><button type='button' className='btn btn-primary'>Entrar</button></Link>
                <Link to='/signup'><button type='button' className='btn btn-success'>Cadastrar-se</button></Link>
            </div>
        )
    }
}

export default Home