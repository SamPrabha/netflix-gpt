import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import MovieSlice from "./MovieSlice";
const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: MovieSlice
    }
})

export default appStore;