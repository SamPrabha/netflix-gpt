import { IMG_CDN_URL } from "../utils/constant";

export const MovieCard = ({ movie }) => {
    // console.log(movie)
    const { poster_path, title } = movie;
    return (
        <div className="w-48 h-[18rem] px-2 py-2">
            {poster_path ? (<img alt={movie.poster_path} src={IMG_CDN_URL + movie.poster_path} />) :
                <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center text-center p-2">
                    <span className="text-sm font-semibold text-gray-700">
                        {title}
                    </span>
                </div>
            }

        </div>
    )
}