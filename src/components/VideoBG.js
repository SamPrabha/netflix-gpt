import { useMovieTrailer } from "../customHooks/useMovieTrailer"
import { useSelector } from "react-redux";
export const VideoBG = ({ movieID }) => {
    // console.log('this is movie id', movieID);
    const trailerFromStore = useSelector((store) => store.movies?.movieTrailer);
    console.log(trailerFromStore);
    useMovieTrailer({ movieID });
    if (!trailerFromStore?.key) return null; //early return
    return (
        <div className="w-screen h-screen">
            <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${trailerFromStore?.key}?si=7nwRKMUM_-hSUpDn`}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>
        </div>
    )
}