import { usePopularMovies } from "../customHooks/usePopularMovies";
import { useTopRatedMovies } from "../customHooks/useTopRatedMovies";
import { useUpcomingMovies } from "../customHooks/useUpcomingMovies";
import { MovieList } from "./MovieList"
import { useSelector } from "react-redux"

export const SecondaryContainer = () => {
    // fetch data from the store
    const moviesData = useSelector((store) => store.movies?.nowPlayingMovies);
    // fetch popular,top rated movies
    usePopularMovies(); useTopRatedMovies(); useUpcomingMovies();
    const popMovies = useSelector((store) => store.movies?.popularMovies);
    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
    // console.log('these are now playing movies', moviesData);
    return (
        <div className="bg-transparent -mt-64 relative z-20">
            {/* movie list * n */}
            <MovieList title={"Now Playing"} movies={moviesData} />
            <MovieList title={"Popular"} movies={popMovies} />
            <MovieList title={"Trending"} movies={topRatedMovies} />
            <MovieList title={"Upcoming"} movies={upcomingMovies} />
        </div>
    )
}