import { useSelector } from "react-redux"
import { MovieList } from "./MovieList";

export const GptSearchSuggestions = () => {
    const { movieNames, movieResult } = useSelector((store) => store.gpt);
    console.log('this are movie names', movieNames);
    console.log('these are movies', movieResult);
    if (!movieNames) return null;
    return (
        <div>
            {
                movieNames.map((movie, index) => <MovieList key={movie} title={movie} movies={movieResult[index]} />)
            }
        </div>
    )
}