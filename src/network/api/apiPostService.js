import { apiClient } from "./apiClient";

export const userLogin = (email, password) => apiClient.post('/api/v1/auth/login', { email, password })

export const userSignup = (id, password, name) => apiClient.post('/api/v1/users/signup', { id, password, name })