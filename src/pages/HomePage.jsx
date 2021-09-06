import React, { useState } from 'react'
import MainContent from '../components/mainContent/MainContent'
import Navbar from '../components/navbar/Navbar'
import Navigation from '../components/navigation/Navigation';

const HomePage = () => {

    const [search, setSearch] = useState('perros salchichas');
    const [method, setMethod] = useState('trending');
    const [input, setInput] = useState('');
    const [page, setPage] = useState(1)

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
    const addPage = () => {
        setPage(page+1)
    }
    const backPage = () => {
        setPage(page-1)
    }

    return (
        <div className="background">
            <div className="home__content">
                <Navbar submit={handleSubmit} input={handleInputChange} method={handleChangeMethod}/>
                <div className="home__nav">
                    <Navigation search={search} page={page} />
                </div>
                <MainContent search={search} method={method} addPage={addPage} backPage={backPage}/>
            </div>
        </div>
    )
}

export default HomePage
