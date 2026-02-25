import { API_Options, nowPlayingMovies } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/MovieSlice";
export const useNowPlayingMoviesHook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getNowPlayingMovies = async () => {
            const data = await fetch(nowPlayingMovies, API_Options);
            const jsonData = await data.json();
            // console.log("this is movies data", jsonData.results);

            dispatch(addNowPlayingMovies(jsonData.results));
        };

        getNowPlayingMovies();
    }, [dispatch]);
};

