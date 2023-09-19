import {apiClient} from "./apiClient";

export const apiGetAccoResult = () => apiClient.get('/api/v1/acco')

export const apiGetRoomResult = () => apiClient.get('/api/v1/room')