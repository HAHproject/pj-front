import {apiClient} from "./apiClient";

export const userLogin = (id, password) => apiClient.post('/api/v1/users/login', {id, password})

export const userSignup = (id, password, name) => apiClient.post('/api/v1/users/signup', {id,password,name})