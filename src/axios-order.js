import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-builder-173da-default-rtdb.firebaseio.com/'
});

export default instance;
