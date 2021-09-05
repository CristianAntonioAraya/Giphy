import React, { useState } from 'react'
import MainContent from '../components/mainContent/MainContent'
import Navbar from '../components/navbar/Navbar'

const HomePage = () => {

    const [search, setSearch] = useState('panda');
    const [method, setMethod] = useState('search');
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(input);
        
    }
    const handleInputChange = (e)=> {
        setInput(e.target.value)
    }
    const handleChangeMethod = ()=> {
        setMethod(method)
    }

    return (
        <div className="background">
            <div className="home__content">
                <Navbar submit={handleSubmit} input={handleInputChange} method={handleChangeMethod}/>
                <div className="home__current-container">
                    <p className="home__current">Results for: {search} </p>
                </div>
                <MainContent search={search} method={method}/>
            </div>
        </div>
    )
}

export default HomePage
