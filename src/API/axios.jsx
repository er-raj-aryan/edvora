import axios from "axios";

const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

export default instance;
