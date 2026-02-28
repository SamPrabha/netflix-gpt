import { useRef } from "react";
import lang from "../utils/languageSupport";
import { client } from "../utils/openai";
import { API_Options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addGPTMovieResult } from "../utils/gptSlice";
export const GptSearchBar = ({ language }) => {
    const dispatch = useDispatch();
    const searchTextVal = useRef(null);
    // search movie api call
    const fetchSearchedMovie = async (movie) => {
        const fetchData = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_Options);
        const jsonData = await fetchData.json();
        // console.log('this is api response', jsonData);
        return jsonData.results;
    }
    const submitFormHandler = async (e) => {
        e.preventDefault();
        const userInput = searchTextVal.current.value;
        if (!userInput) return;
        const gptQuery =
            `Act as a Movie Recommendation system and suggest movies for the query: ${userInput}.
         Only give me names of 5 movies, comma separated. Like the example result given ahead. Example Result: Dhurandhar, अशी ही बनवाबनवी, Hera Pheri, Dilwale Dulhania Le Jayenge, Dhamaal`;
        const gptResults = await client.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                { role: 'user', content: gptQuery },
            ],
        });
        // console.log(gptResults.choices);
        if (!gptResults.choices) { console.log('Invalid response') }
        // console.log(gptResults.choices[0].message.content);
        const gptMovies = gptResults.choices[0].message.content.split(", ");
        // console.log('These are gpt movies', gptMovies);
        // and for each movies we will call TMDB search api
        const promiseArr = gptMovies.map((movie) => fetchSearchedMovie(movie));
        // console.log('this is from map func', promiseArr); //returns a promise = [promise,promise,promise,promise,promise] , we have to resolve it
        const moviesData = await Promise.all(promiseArr);
        // console.log('this is final resolved o/p', moviesData);
        dispatch(addGPTMovieResult({ movieNames: gptMovies, movieResult: moviesData }));
    };

    return (
        <div className="w-full max-w-2xl">
            <form className="flex w-full" onSubmit={(e) => submitFormHandler(e)}>
                <input
                    ref={searchTextVal}
                    className="flex-grow px-4 py-2 border rounded-l-lg"
                    placeholder={lang[language].SearchPlaceholder} />
                <button
                    type="submit"
                    className="bg-purple-600 text-white px-6 py-2 rounded-r-lg">
                    {lang[language].Search}
                </button>
            </form>
        </div>
    )
}