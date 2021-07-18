const BASE_URL = 'https://api.themoviedb.org/3';

export const useApi = (url) => {
    return fetch(BASE_URL + url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
}