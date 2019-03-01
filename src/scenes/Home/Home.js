import React, { Component } from 'react'

import './Home.css'
import HomeHeader from './components/HomeHeader/HomeHeader';
import HomeBanner from './components/HomeBanner/HomeBanner';
import PageBottom from '../../components/PageBottom/PageBottom';
class Home extends Component {
    render() {
        return (
            <div>
                <HomeHeader/>
                <HomeBanner/>
                <PageBottom/>
            </div>
        )
    }
}

export default Home