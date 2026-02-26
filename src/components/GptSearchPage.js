import { GptSearchBar } from "./GptSearchBar";
import { GptSearchSuggestions } from "./GptSearchSuggestions";
import bodybg from "../assets/images/bodybg.jpg";
import lang from "../utils/languageSupport";
import { useSelector } from "react-redux";
export const GptSearchPage = () => {
    const langVal = useSelector((store) => store.config.lang);
    return (
        <div className="relative min-h-screen">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bodybg})` }}></div>

            {/* Dark Overlay (for opacity effect) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

            {/* Content Layer */}
            <div className="relative z-10">
                <div className="flex justify-center min-h-[80vh] mt-3">
                    <div className="flex flex-col items-center w-full">
                        <div className="text-white text-3xl text-center mb-6">
                            {lang[langVal].gpt_text}
                        </div>

                        <div className="w-full flex justify-center">
                            <GptSearchBar language={langVal} />
                        </div>

                        <div className="w-full flex justify-center mt-4">
                            <GptSearchSuggestions />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


