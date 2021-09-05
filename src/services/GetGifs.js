import axios from 'axios'

const API_KEY= 'PVFDdPUlEwOQ3dbpoo8612JtA01hXg4H';
const API_URL= 'https://api.giphy.com/v1/gifs';

export const GetGifs = ({method, search}) => {
    try {
        return(
            axios.get(`${API_URL}/${method}?api_key=${API_KEY}&q=${search}&limit=40&offset=0&rating=g&lang=en`)
            .then(resp => {
                return(
                    resp.data
                )
            })         
        )
    } catch (error) {
        console.log(error)
        return;
    }
}