import { MovieCard } from "./MovieCard"

export const MovieList = ({ title, movies }) => {
    // console.log(title, movies);
    if (!movies || movies.length === 0) return;
    return (
        <div className="py-4">
            <div className="p-2 font-bold text-3xl text-white"> {title} </div>
            <div className="flex overflow-x-scroll no-scrollbar scroll-smooth">
                <div className="flex gap-4">
                    {movies.map((movie) => <MovieCard key={movie.id} title={title} movie={movie} />)}
                </div>
            </div>
        </div>
    )
}