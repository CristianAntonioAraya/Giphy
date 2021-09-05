import React from 'react'

const NavLink = ({text}) => {
    return (
        <div className="nav__link">
            <p className="nav__link-item">{text}</p> 
            <div className="nav__border bg-gradient"></div>
        </div>
    )
}

export default NavLink
