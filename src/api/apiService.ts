//fetch data from server endpoint
import axios from 'axios';

export const getCountryData = async() => {
    try {
        const res = await axios.get('/api/countries')
        console.log('apiservice', res)
        return res.data

    } catch (error) {
        console.log('apiservice', error)
    }
}