import {apiClient} from "./apiClient";

export const apiGetresult = () => apiClient.get('/api/v1/amenity')