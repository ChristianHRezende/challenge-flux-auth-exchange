import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import './Dashboard.css'

import DashboardHeader from './components/DashboardHeader/DashboardHeader'
import DashboardHome from './components/DashboardHome/DashboardHome';
import PageBottom from '../../components/PageBottom/PageBottom';
import { auth } from 'firebase';
import { ToastsStore } from 'react-toasts';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = { isAuth: true, user: {}, redirect: false }
    }
    componentDidMount() {
        const user = localStorage.getItem('user')
        if (user) { this.setState({ user }) }
        else { this.setState({ isAuth: !this.state.isAuth }) }
    }

    clickSignOutHandler = () => {
        auth.signOut().then(function () {
            this.setState({ redirect: true })
        }).catch(function (error) {
            ToastsStore.error('Não foi possível realizar o logout')
        });

    }

    render() {
        if (this.state.redirect) return <Redirect to='/' />
        return (
            <Router>
                <div>
                    <DashboardHeader username={this.state.user} clickSignOut={this.clickSignOutHandler} />
                    <div className='container'>
                        <Route exact path='/dashboard/' component={DashboardHome}></Route>
                    </div>
                    <PageBottom color={'#000E22'} />
                </div>
            </Router>
        )
    }
}

export default Dashboard