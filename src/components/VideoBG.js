import { useMovieTrailer } from "../customHooks/useMovieTrailer"
import { useSelector } from "react-redux";
export const VideoBG = ({ movieID }) => {
    // console.log('this is movie id', movieID);
    const trailerFromStore = useSelector((store) => store.movies?.movieTrailer);
    // console.log(trailerFromStore);
    useMovieTrailer({ movieID });
    if (!trailerFromStore?.key) return null; //early return
    return (
        <div className="w-screen h-screen">
            <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${trailerFromStore.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerFromStore.key}`}
                title="Trailer"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
            ></iframe>
        </div>
    )
}