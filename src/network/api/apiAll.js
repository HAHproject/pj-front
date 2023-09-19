import axios from "axios";

export const apiAll = axios.create(
    {
        baseURL : 'http://localhost:8000'
    }
);







