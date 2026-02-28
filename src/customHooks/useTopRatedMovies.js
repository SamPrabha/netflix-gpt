import { useEffect } from "react"
import { API_Options, topRatedMovies } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux"
import { addTopRatedMovies } from "../utils/MovieSlice";

export const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const isMovieAvailable = useSelector((store) => store.movies.topRatedMovies);
    useEffect(() => {
        const fetchTopRatedMovies = async () => {
            const data = await fetch(topRatedMovies, API_Options);
            const jsonData = await data.json();
            dispatch(addTopRatedMovies(jsonData.results));
        }
        !isMovieAvailable && fetchTopRatedMovies();
    }, [dispatch])
}