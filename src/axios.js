import axios from 'axios'
let Http = axios.create({
    baseURL: 'https://localhost:44315/api/',
    credentials: 'include',
    headers: {
        'content-type': 'application/json',
    },
});


export default Http
