import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import MovieSlice from "./MovieSlice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";
const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: MovieSlice,
        gpt: gptSlice,
        config: configSlice
    }
})

export default appStore;