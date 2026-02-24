import headerlogo from "../assets/images/headerlogo.svg";
import user from "../assets/images/user.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { ErrorPage } from "./ErrorPage";
export const Header = () => {
    const fetchUserDetails = useSelector((store) => store.user);
    console.log('these are user details', fetchUserDetails);

    const navigate = useNavigate();
    const signOutHandler = () => {
        signOut(auth).then(() => {
            navigate('/');
        }).catch((error) => {
            // An error happened.
            navigate('/error');
        });
    }
    return (
        <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-black shadow-md">
            {/* Left - Logo */}
            <img
                src={headerlogo}
                alt="Logo"
                className="h-10 object-contain" />

            {/* Right - User Section */}
            {fetchUserDetails && <div className="flex items-center gap-4">
                <img
                    src={user}
                    alt="User"
                    className="h-9 w-9 rounded-sm cursor-pointer" /> <span className="text-white font-bold">{fetchUserDetails.displayName}</span>

                <button
                    onClick={signOutHandler}
                    type="button"
                    className="text-white bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition">
                    Sign Out
                </button>
            </div>}
        </div>
    )
}