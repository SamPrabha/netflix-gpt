import playbtn from "../assets/images/playbtn.svg";
import infobtn from "../assets/images/infobtn.svg";

export const VideoTitle = ({ original_title, overview }) => {
    // console.log('these are the details', original_title, overview);
    return (
        <div className="m-4">
            <h1 className="text-5xl font-bold text-white">{original_title}</h1>
            <p className="text-lg py-2 text-white font-bold"> {overview} </p>
            <div className="flex items-center gap-5 py-4">
                <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-md text-xl font-semibold hover:bg-opacity-80 transition" type="button">
                    <img src={playbtn} alt="play" /> Play
                </button>

                <button className="flex items-center gap-2 bg-gray-500 bg-opacity-70 text-white px-6 py-2 rounded-md text-xl font-semibold hover:bg-opacity-50 transition" type="button">
                    <img src={infobtn} alt="info" /> More Info
                </button>

            </div>
        </div>
    )
}