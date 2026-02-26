import { Header } from "./Header"
import { useNowPlayingMoviesHook } from "../customHooks/useNowPlayingMoviesHooks";
import { MainContainer } from "./Maincontainer";
import { SecondaryContainer } from "./SecondaryContainer";
import { GptSearchPage } from "./GptSearchPage";
import { useSelector } from "react-redux";

export const BrowsePage = () => {
    const isGptTrue = useSelector((store) => store.gpt.showGptSearch);
    useNowPlayingMoviesHook(); //custom hook created for fetching movie list and storing it to RTK - movie slice
    return (
        <div className="bg-black">
            <Header />
            {
                isGptTrue ? (<GptSearchPage />) : (<><MainContainer /><SecondaryContainer /></>)
            }
        </div>
    )
}