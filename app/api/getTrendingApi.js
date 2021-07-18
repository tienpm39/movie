import { useApi } from './apiGateway';

export const fetchTrendingMovie = () => {

    const api_key = 'f539ec313b2f24fd507015b69fbe59bd';

    const url = '/trending/all/day?api_key=' + `${api_key}`;
    return useApi(url);
}