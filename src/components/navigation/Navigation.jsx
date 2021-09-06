import React,{ useState} from 'react'
import { useSelector } from 'react-redux'

const Navigation = () => {

    const [page, setPage] = useState(1)
    const {search,endpoint,method} = useSelector(state => state.params)


    return (
        <div className="navigation__container">
            <div className="navigation__content">
                {
                    method === 'trending'
                    ? <p className="navigation__current">Trendings {endpoint} </p>
                    : <p className="navigation__current">{endpoint} for: {search}  </p>
                }
            </div>
            <div className="navigation__content">
                <p className="navigation__page">Page: {page}</p>
            </div>
        </div>
    )
}

export default Navigation
