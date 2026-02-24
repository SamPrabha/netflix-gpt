import { useSelector } from "react-redux"
import { VideoBG } from "./VideoBG";
import { VideoTitle } from "./VideoTitle";

export const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (!movies) return; //early return to avoid errors if(movies===null)
    const mainMovie = movies[0];
    // console.log('main movie', mainMovie);
    const { id, original_title, overview } = mainMovie;
    return (
        <div className="relative h-screen w-screen">

            {/* Title Centered */}
            <div className="absolute inset-0 z-10 flex items-center px-4">
                <div className="ml-12 max-w-xl">
                    <VideoTitle
                        original_title={original_title}
                        overview={overview}
                    />
                </div>
            </div>

            {/* Background Video */}
            <div className="absolute inset-0">
                <VideoBG movieID={id} />
            </div>

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

        </div>

    )
}