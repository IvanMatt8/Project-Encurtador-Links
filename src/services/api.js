
import axios from 'axios';


export const key = "3541462662ff97456a68ac5f9c4506e27d053e40"

const api = axios.create({
    baseURL: "https://api-ssl.bitly.com/v4",
    headers: {
        "Authorization":`Bearer ${key}`
    }
})

// Minha chave : 3541462662ff97456a68ac5f9c4506e27d053e40 //


export default api

