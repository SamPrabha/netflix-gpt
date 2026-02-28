import { useEffect } from "react"
import { API_Options, upcomingMovies } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux"
import { addUpcomingMovies } from "../utils/MovieSlice";

export const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const isMovieAvailable = useSelector((store) => store.movies.upcomingMovies);
    useEffect(() => {
        const fetchUpcomingMovies = async () => {
            const data = await fetch(upcomingMovies, API_Options);
            const jsonData = await data.json();
            dispatch(addUpcomingMovies(jsonData.results));
        }
        !isMovieAvailable && fetchUpcomingMovies();
    }, [dispatch])
}