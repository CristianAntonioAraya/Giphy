import React from 'react'
import NavLink from './NavLink'

const Navbar = ({submit, input}) => {
    return (
        <div className="navbar__container">
            <div className="navbar__content">
                <h2 className="navbar__title text-gradient">GIPHY</h2>
                <div className="navbar__links">
                    <NavLink text={'Trending'}/>
                    <NavLink text={'Find by ID'}/>
                    <NavLink text={'Categories'}/>
                    <NavLink text={'About'}/>
                </div>
            </div>
            <form className="navbar__search bg-gradient" onSubmit={submit}>
                <input className="navbar__search-bar" type="text" placeholder="Search some gif..." onChange={input}/>
                <button className="navbar__search-btn" type="submit">Go!</button>
            </form>
        </div>
    )
}

export default Navbar
