import React, { useEffect, useState } from 'react'
import { GetGifs } from '../../services/GetGifs'
import Gif from '../gif/Gif';

const MainContent = ({search, method, addPage,backPage }) => {
    
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [offset, setoffset] = useState(0)
    
    useEffect(() => {
        const getGifs = async() => {
            try {
                setIsLoading(true)
                const resp = await GetGifs({method, search, offset})
                setGifs(resp.data)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(true)
                console.log(error)
            }
        }
        getGifs();
    }, [search,method,offset])
    const nextPage = () => {
        setoffset(offset+10)
        addPage();
    }
    const prevPage = () => {
        setoffset(offset-10)
        backPage();
    }

    if(isLoading){
        return(
            <div>Loading</div>
        )
    }
    return (
            <div  className="content__container bg-gradient">
                <div className="content__content">
                    {
                    offset !== 0 &&
                    <i className ="fas fa-arrow-circle-left content__prev" onClick={prevPage}/>
                    }
                    <i className="fas fa-arrow-circle-right content__next" onClick={nextPage}/>
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
