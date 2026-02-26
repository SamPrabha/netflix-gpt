import headerlogo from "../assets/images/headerlogo.svg";
import user from "../assets/images/user.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { ErrorPage } from "./ErrorPage";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { isGptSearchAdded } from "../utils/gptSlice";
import { Language_Support } from "../utils/languageSupport";
import { changeLang } from "../utils/configSlice";
export const Header = () => {
    const fetchUserDetails = useSelector((store) => store.user);
    // console.log('these are user details', fetchUserDetails);

    const navigate = useNavigate();
    const signOutHandler = () => {
        signOut(auth).then(() => { }).catch((error) => {
            // An error happened.
            navigate('/error');
        });
    }
    // add useEffect for auth handler
    const user_Dispatch = useDispatch();
    const Navigate = useNavigate();
    // add auth event listener once
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, password, displayName } = user;
                user_Dispatch(addUser({ uid: uid, email: email, password: password, displayName: displayName }));
                Navigate('/browse');
            } else {
                // User is signed out
                user_Dispatch(removeUser());
                Navigate('/');
            }
        });
        // cleanups
        return () => unsubscribe();
    }, [])
    const showGptSearchHandler = () => {
        user_Dispatch(isGptSearchAdded());
    }
    const selectOptionHandler = (val) => {
        // console.log('selected lang', lang)
        user_Dispatch(changeLang(val));
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
                <select className="text-white bg-transparent px-3 py-1 border rounded" onChange={(e) => selectOptionHandler(e.target.value)}>
                    {Language_Support.map((lang) => <option key={lang.identifier} value={lang.identifier} className="text-black"
                    > {lang.name} </option>)}
                </select>
                <button
                    onClick={showGptSearchHandler}
                    type="button"
                    className="text-white bg-purple-600 px-3 py-1 rounded hover:bg-purple-700 transition">
                    GPT Search
                </button>
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