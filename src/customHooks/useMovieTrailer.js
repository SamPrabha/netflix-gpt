import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constant";
import { useEffect } from "react";
import { addMovieTrailer } from "../utils/MovieSlice";
export const useMovieTrailer = ({ movieID }) => {
    console.log(movieID);
    const dispatch = useDispatch();

    const fetchMovieTrailer = async () => {
        const fetchData = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos`, API_Options);
        const data = await fetchData.json();
        console.log('this is the data', data);
        const video_trailers = data?.results?.filter((video) => video.type === 'Trailer');
        // console.log('video trailer', video_trailers[0])
        const trailer = video_trailers.length ? video_trailers[0] : data.results[0]; // video_trailers.length!==0
        console.log(trailer);
        dispatch(addMovieTrailer(trailer));
    }

    useEffect(() => {
        fetchMovieTrailer();
    }, [])

}