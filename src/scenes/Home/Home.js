import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <Link to='/signin'><button type='button' className='btn btn-primary'>Entrar</button></Link>
                <Link to='/signup'><button type='button' className='btn btn-success'>Cadastrar-se</button></Link>
            </div>
        )
    }
}

export default Home