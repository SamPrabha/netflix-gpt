import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        movieTrailer: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        },
        addMovieTrailer: (state, action) => {
            console.log(action, state)
            state.movieTrailer = action.payload
        }
    }
})

export const { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addMovieTrailer } = MovieSlice.actions;
export default MovieSlice.reducer;