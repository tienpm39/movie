import { useApi } from './apiGateway';

export const fetchPopularMovie = () => {

    const api_key = 'f539ec313b2f24fd507015b69fbe59bd';

    const url = '/movie/popular?api_key=' + `${api_key}`;
    return useApi(url);
}