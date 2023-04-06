import { API_HOST,  API_KEY} from '../utils/constants';

export async function getMovies(page){
    try {
        const url = `${API_HOST}/popular?${API_KEY}&language=es-ES&page=${page}`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function getMovieById(id){
    try {
        const url = `${API_HOST}/${id}?${API_KEY}&language=es-ES`;
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function getArrayMovies(array){
    try {
        const movieList = [];
        if(array.length>0){
            array.map(async (id) => {
                const movie = await getMovieById(id);
                movieList.push(movie);
            })
            return movieList;
        }
    } catch (error) {
        throw error;
    }
}