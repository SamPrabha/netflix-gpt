import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        movieResult: null,
        movieNames: null
    },
    reducers: {
        isGptSearchAdded: (state, action) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGPTMovieResult: (state, action) => {
            const { movieNames, movieResult } = action.payload;
            state.movieNames = movieNames;
            state.movieResult = movieResult;
        }
    }
})

export const { isGptSearchAdded, addGPTMovieResult } = gptSlice.actions;
export default gptSlice.reducer;