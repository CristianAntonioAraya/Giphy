import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { GetGifs } from '../../services/GetGifs'
import Gif from '../gif/Gif';

const MainContent = ({ addPage,backPage }) => {
    
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const {method,limit,endpoint,offset,search} = useSelector(state => state.params);
    
    useEffect(() => {
        const getGifs = async() => {
            try {
                setIsLoading(true)
                const resp = await GetGifs({method, search, offset, endpoint, limit})
                setGifs(resp.data)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(true)
                console.log(error)
            }
        }
        getGifs();
    }, [search,method,offset,endpoint,limit])


    const nextPage = () => {
        addPage();
    }
    const prevPage = () => {
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
