import {apiAll} from "./apiAll";


export const userLogin = (id, password) => apiAll.post('/api/v1/users/login', {id, password})

export const userSignup = (id, password, name) => apiAll.post('/api/v1/users/signup', {id,password,name})

export const roleSignup = (user) => apiAll.post('/api/v1/auth/signup', user)