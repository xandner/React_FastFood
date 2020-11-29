import axios from 'axios';

const inctance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/'
})

export default inctance;