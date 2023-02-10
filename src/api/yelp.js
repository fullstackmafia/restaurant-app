import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer bXXBcBEUzxHSO4Zpx1zv-cMGH83hV-CUZbkhcEJG2L9Sv7cJBGUPme2N74hxPoBz9vgD_abJ0g7-e9juFhjw0fuCqk743PBt_MU9Kn5_R99rntGIOvU7CCUdfiDmY3Yx'
    }
})