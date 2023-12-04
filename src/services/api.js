import axios from 'axios';

//URL: https://api.themoviedb.org/3/movie/now_playing?api_key=761c5e59b3d5835032859874ba79ed9b&language=pt-BR
//BASE URL: https://api.themoviedb.org/3/
//API KEY: 761c5e59b3d5835032859874ba79ed9b

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;