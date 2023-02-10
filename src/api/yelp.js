import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer INSERT-API-KEY-HERE'
    }
})
