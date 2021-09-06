import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { SetEndpoint,SetMethod } from '../../actions/paramsAction'

const NavLinks = () => {

    const {method, endpoint} = useSelector(state => state.params)
    const dispatch = useDispatch()

    const handleToggleToSticker = () => {
        dispatch(SetEndpoint('stickers'))
    }
    const handleToggleToGifs =() => {
        dispatch(SetEndpoint('gifs'))
    }
    const handleChangeToTrendings = () => {
        dispatch(SetMethod('trending'))
    }
    return (
        <div className="nav__container">
            {
                method !== 'trending' &&
                <div className="nav__link" >
                    <p className="nav__link-item" onClick={handleChangeToTrendings}>Trending</p> 
                    <div className="nav__border bg-gradient"></div>
                </div>
            }
            <div className="nav__link" >
                {
                    endpoint === 'gifs'
                    ?<p className="nav__link-item" onClick={handleToggleToSticker}>Stickers</p> 
                    :<p className="nav__link-item" onClick={handleToggleToGifs}>Gifs</p> 
                }
                <div className="nav__border bg-gradient"></div>
            </div>
            <div className="nav__link" >
                <p className="nav__link-item">About</p> 
                <div className="nav__border bg-gradient"></div>
            </div>
        </div>
    )
}

export default NavLinks
