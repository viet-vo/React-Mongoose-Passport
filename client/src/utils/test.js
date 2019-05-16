import axios from 'axios';

export default {
    getTestData: () => {
        return axios.get('/test');
    }
}