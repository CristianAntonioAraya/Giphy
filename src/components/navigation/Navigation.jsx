import React from 'react'
import { useSelector } from 'react-redux'
import Pagination from '../pagination/Pagination'

const Navigation = () => {

    const {search,endpoint,method,page} = useSelector(state => state.params)

    return (
        <div className="navigation__container">
            <div className="navigation__content">
                {
                    method === 'trending'
                    ? <p className="navigation__current">Trendings {endpoint} </p>
                    : <p className="navigation__current">{endpoint} for: {search}  </p>
                }
            </div>
            <Pagination/>
            <div className="navigation__content">
                <p className="navigation__page">Page: {page}</p>
            </div>
        </div>
    )
}

export default Navigation
