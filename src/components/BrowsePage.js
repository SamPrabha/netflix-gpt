import { Header } from "./Header"
import { useNowPlayingMoviesHook } from "../customHooks/useNowPlayingMoviesHooks";
import { MainContainer } from "./Maincontainer";
import { SecondaryContainer } from "./SecondaryContainer";

export const BrowsePage = () => {

    useNowPlayingMoviesHook(); //custom hook created for fetching movie list and storing it to RTK - movie slice
    return (
        <>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </>
    )
}