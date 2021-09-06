import React, { useState } from 'react'
import MainContent from '../components/mainContent/MainContent'
import Navbar from '../components/navbar/Navbar'
import Navigation from '../components/navigation/Navigation';

const HomePage = () => {

    const [page, setPage] = useState(1);

    const addPage = () => {
        setPage(page+1)
    }
    const backPage = () => {
        setPage(page-1)
    }

    return (
        <div className="background">
            <div className="home__content">
                <Navbar />
                <div className="home__nav">
                        <Navigation/>
                </div>
                <MainContent  addPage={addPage} backPage={backPage} />
            </div>
        </div>
    )
}

export default HomePage
