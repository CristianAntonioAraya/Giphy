import axios from 'axios'

const API_KEY= 'xOkm1DMPFKBW1tZSFHe8qqM0OtW4iAxi';
const API_URL= 'https://api.giphy.com/v1';

export const GetGifs = ({method, search, offset, endpoint, limit}) => {
    try {
        if(method === 'search' && search !== ''){
            return(
                axios.get(`${API_URL}/${endpoint}/${method}?api_key=${API_KEY}&q=${search}&limit=${limit}&offset=${offset}&rating=g`)
                .then(resp => {
                    return(
                        resp.data
                    )
                })         

                )
        }
        if(method === 'trending'){
            return(
                axios.get(`${API_URL}/${endpoint}/${method}?api_key=${API_KEY}&limit=${limit}&offset=${offset}&rating=g&lang=en`)
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