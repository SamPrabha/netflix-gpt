import { IMG_CDN_URL } from "../utils/constant";

export const MovieCard = ({ movie }) => {
    // console.log(movie)
    return (
        <div className="w-48 h-[18rem] px-2 py-2">
            <img alt={movie.poster_path} src={IMG_CDN_URL + movie.poster_path} />

        </div>
    )
}