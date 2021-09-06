import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router';
import { SetMethod, setSearch } from '../../actions/paramsAction'
import NavLinks from './NavLinks';


const Navbar = () => {
    const history = useHistory()
    const [input, setInput] = useState('')    
    const dispatch = useDispatch()
    const {endpoint} = useSelector(state => state.params)

    const handleSubmit =(e)=> {
        e.preventDefault();
        if(input !== ''){
            dispatch(setSearch(input))
            dispatch(SetMethod('search'))
            setInput('')
            history.push(`/search=${input}`)
        }
    }
    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div className="navbar__container">
            <div className="navbar__content">
                <h2 className="navbar__title text-gradient">GIPHY</h2>
                    <NavLinks/>
            </div>
            <form className="navbar__search bg-gradient" onSubmit={handleSubmit}>
                {
                    endpoint === 'gifs' 
                    ?<input className="navbar__search-bar" type="text" placeholder="Search some gif..." value={input} onChange={handleInputChange}/>
                    :<input className="navbar__search-bar" type="text" placeholder="Search some stickers..." value={input} onChange={handleInputChange}/>
                }
                <button className="navbar__search-btn" type="submit">Go!</button>
            </form>
        </div>
    )
}

export default Navbar