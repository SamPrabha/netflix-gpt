import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false
    },
    reducers: {
        isGptSearchAdded: (state, action) => {
            state.showGptSearch = !state.showGptSearch
        }
    }
})

export const { isGptSearchAdded } = gptSlice.actions;
export default gptSlice.reducer;