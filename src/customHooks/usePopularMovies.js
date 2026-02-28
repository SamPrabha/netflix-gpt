import { useEffect } from "react"
import { API_Options, popularMovies } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux"
import { addPopularMovies } from "../utils/MovieSlice"

export const usePopularMovies = () => {
    const dispatch = useDispatch();
    const isMovieAvailable = useSelector((store) => store.movies.popularMovies);
    useEffect(() => {
        const fetchPopularMovies = async () => {
            const data = await fetch(popularMovies, API_Options);
            // console.log('mmmmmm',data)
            const jsonData = await data.json();
            dispatch(addPopularMovies(jsonData.results))
            // console.log('popular movies', jsonData);
        }
        !isMovieAvailable && fetchPopularMovies();
    }, [dispatch])
}