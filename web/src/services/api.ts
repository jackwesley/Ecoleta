import axios from 'axios';
import { EAFNOSUPPORT } from 'constants';

const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;