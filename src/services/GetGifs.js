import axios from 'axios'

const API_KEY= 'PVFDdPUlEwOQ3dbpoo8612JtA01hXg4H';
const API_URL= 'https://api.giphy.com/v1/gifs';

export const GetGifs = ({method, search, offset}) => {
    try {
        if(method === 'search'){
            return(
                axios.get(`${API_URL}/${method}?api_key=${API_KEY}&q=${search}&limit=20&offset=${offset}&rating=g&lang=en`)
                .then(resp => {
                    return(
                        resp.data
                    )
                })         

                )
        }
        if(method === 'trending'){
            return(
                axios.get(`${API_URL}/${method}?api_key=${API_KEY}}&limit=20&offset=${offset}&rating=g&lang=en`)
                .then(resp => {
                    return(
                        resp.data
                    )
                })         

                )
        }
    } catch (error) {
        console.log(error)
        return;
    }
}