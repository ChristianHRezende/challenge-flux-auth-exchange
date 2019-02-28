import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './Dashboard.css'

import DashboardHeader from './components/DashboardHeader/DashboardHeader'
import DashboardHome from './components/DashboardHome/DashboardHome';
import DashboardBottom from './components/DashboardBottom/DashboardBottom';

class Dashboard extends Component {
    render() {
        return (
            <Router>
                <div>
                    <DashboardHeader />
                    <div className='container'>
                        <Route exact path='/' component={DashboardHome}></Route>
                    </div>
                    <DashboardBottom/>
                </div>
            </Router>
        )
    }
}

export default Dashboard