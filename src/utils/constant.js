const ACCESS_TOKEN = process.env.REACT_APP_TMDB_ACCESS_TOKEN;
// const API_KEY = process.env.API_KEY;

export const OPENAI_GPT_KEY = process.env.REACT_APP_OPEN_AI_GPT_KEY;
// console.log("ACCESS_TOKEN:", ACCESS_TOKEN);

export const API_Options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`
    }
};

export const nowPlayingMovies = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

export const popularMovies = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const topRatedMovies = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const upcomingMovies = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

// export const searchMovie = "https://api.themoviedb.org/3/search/movie";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500"; 