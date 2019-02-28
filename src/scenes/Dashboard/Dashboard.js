import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './Dashboard.css'

import DashboardHeader from './components/DashboardHeader/DashboardHeader'
import DashboardHome from './components/DashboardHome/DashboardHome';
import PageBottom from '../../components/PageBottom/PageBottom';

class Dashboard extends Component {
    render() {
        return (
            <Router>
                <div>
                    <DashboardHeader />
                    <div className='container'>
                        <Route exact path='/' component={DashboardHome}></Route>
                    </div>
                    <PageBottom color={'#000E22'}/>
                </div>
            </Router>
        )
    }
}

export default Dashboard