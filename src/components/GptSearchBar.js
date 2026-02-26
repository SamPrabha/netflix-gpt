import lang from "../utils/languageSupport";

export const GptSearchBar = ({ language }) => {
    return (
        <div className="w-full max-w-2xl">
            <form className="flex w-full">
                <input
                    className="flex-grow px-4 py-2 border rounded-l-lg"
                    placeholder={lang[language].SearchPlaceholder} />
                <button
                    type="button"
                    className="bg-purple-600 text-white px-6 py-2 rounded-r-lg">
                    {lang[language].Search}
                </button>
            </form>
        </div>

    )
}