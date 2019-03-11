import React, { Component } from 'react'

import './Home.css'
import HomeHeader from './components/HomeHeader/HomeHeader';
import HomeBanner from './components/HomeBanner/HomeBanner';
import PageBottom from '../../components/PageBottom/PageBottom';
import HomeInfo from './components/HomeInfo/HomeInfo';
import { Redirect } from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => this.setState({ isLoading: false }), 3000)
    }

    render() {
        if (this.props.email) return <Redirect to="/signup" />
        if (this.state.isLoading) return <div className='container-spinner'><Spinner /></div>
        return (
            <div>
                <section id='home-start' className='home-start'>
                    <HomeHeader />
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