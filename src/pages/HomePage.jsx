import React from 'react'
import MainContent from '../components/mainContent/MainContent'
import Navbar from '../components/navbar/Navbar'

const HomePage = () => {
    return (
        <div className="background">
            <div className="home__content">
                <Navbar/>
                <div className="home__current-container">
                    <p className="home__current">Current Search: </p>
                </div>
                <MainContent/>
            </div>
        </div>
    )
}

export default HomePage
