import React, { Component } from 'react'

import './Home.css'
import HomeHeader from './components/HomeHeader/HomeHeader';
import HomeBanner from './components/HomeBanner/HomeBanner';
import PageBottom from '../../components/PageBottom/PageBottom';
import HomeInfo from './components/HomeInfo/HomeInfo';
import { Redirect } from 'react-router-dom'

class Home extends Component {

    render() {
        if (this.props.email) return <Redirect to="/signup" />

        return (
            <div>
                <section id='home-start' className='home-start'>
                    <HomeHeader/>
                    <HomeBanner onClickSignup={this.props.onClickConfirmEmail} />
                </section>
                <section id='home-info' className='home-info'>
                    <HomeInfo />
                </section>
                <section id='home-bottom' className='home-bottom'>
                    <PageBottom />
                </section>
            </div>
        )
    }
}

export default Home