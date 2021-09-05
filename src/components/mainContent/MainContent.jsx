import React, { useEffect, useState } from 'react'
import { GetGifs } from '../../services/GetGifs'
import Gif from '../gif/Gif';

const MainContent = ({search, method}) => {
    
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getGifs = async() => {
            try {
                setIsLoading(true)
                const resp = await GetGifs({method, search})
                setGifs(resp.data)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(true)
                console.log(error)
            }
        }
        getGifs();
    }, [search,method])

    if(isLoading){
        return(
            <div>Loading</div>
        )
    }
    return (
            <div  className="content__container bg-gradient">
                <div className="content__content">
                    <div className="content__gifs">
                        {
                            gifs.map(gif=> (
                                <Gif key={gif.id} img={gif.images.downsized_medium}/>
                            ))
                        }
                    </div>
                </div>
            </div>
    )
}

export default MainContent
