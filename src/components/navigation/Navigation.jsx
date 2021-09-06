import React from 'react'

const Navigation = ({search ,page}) => {
    return (
        <div className="navigation__container">
            <div className="navigation__content">
                <p className="navigation__current">Results for: {search} </p>
            </div>
            <div className="navigation__content">
                <p className="navigation__page">Page: {page}</p>
            </div>
        </div>
    )
}

export default Navigation
