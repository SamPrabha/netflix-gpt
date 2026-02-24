import { Header } from "./Header"
import bodybg from "../assets/images/bodybg.jpg";
import { useRef, useState } from "react";
import { loginFormValidate } from "../utils/loginFormValidate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
export const Login = () => {
    const updateUserDispatch = useDispatch();
    const navigate = useNavigate();
    // state var for sign in/sign up toggle
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const handleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    // creating the ref using useRef to those form fiels
    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);
    // fetch the form fields
    const fetchFormDetails = (e) => {
        e.preventDefault();
        const nameValue = fullName.current ? fullName.current.value : null;
        const message = loginFormValidate(email.current.value, password.current.value, nameValue);
        console.log(`the msg is ${message}`);
        setErrorMsg(message);
        if (message) return;
        // and if message is null means form is error free , sign in / sign up logic
        if (!isSignInForm) {
            // sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log('sign up successful', user);
                    updateProfile(user, {
                        displayName: nameValue
                    }).then(() => {
                        // Profile updated! Now navigate to browse
                        const { uid, email, password, displayName } = auth.currentUser;
                        updateUserDispatch(addUser({ uid: uid, email: email, password: password, displayName: displayName }))
                        navigate('/browse');
                    }).catch((error) => {
                        // An error occurred
                        setErrorMsg(error);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + '-' + errorMessage);
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCreds) => {
                    const user = userCreds.user;
                    console.log('successful login', user);
                    navigate('/browse');
                })
                .catch((error) => {
                    console.log('these are errors', error)
                    console.log("FULL ERROR OBJECT:", error);

                    const errorCode = error.code;
                    const errorMsg = error.message;
                    console.log(errorCode)
                    setErrorMsg(errorCode + '-' + errorMsg);
                })
        }

    }
    return (
        <div className="relative min-h-screen">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bodybg})` }}
            ></div>

            {/* Dark Overlay (for opacity effect) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

            {/* Content Layer */}
            <div className="relative z-10">
                <Header />

                {/* Your form will come here */}
                <div className="flex justify-center items-center min-h-[80vh]">
                    {/* FORM GOES HERE */}
                    <form onSubmit={fetchFormDetails} className="p-4 bg-gradient-to-b from-black/75 via-black/65 to-black/85 w-96 h-fit">
                        <h1 className="text-white font-bold p-2 my-3 text-3xl"> {isSignInForm ? "Sign In" : "Sign Up"} </h1>
                        {!isSignInForm && <input ref={fullName} type="text" className="bg-[#0a0b0c] border border-white p-4 my-3 w-full rounded-sm text-white" placeholder="Full Name" />}
                        <input ref={email} type="text" className="bg-[#0a0b0c] border border-white p-4 my-3 w-full rounded-sm text-white" placeholder="Email Address" />
                        <input ref={password} type="password" className="bg-[#0a0b0c] border border-white p-4 my-5 w-full rounded-sm text-white" placeholder="Password" />
                        <p className="text-red-700 font-bold"> {errorMsg} </p>
                        <button type="submit" className="bg-red-700 text-white p-4 w-full text-center my-6 rounded-sm"> {isSignInForm ? "Sign In" : "Sign Up"} </button>
                        <div className="p-4">
                            <p className="cursor-pointer text-center" onClick={handleSignInForm}><span className="text-gray-500"> {isSignInForm ? "New to Netflix?" : "Already a User?"} </span> <span className="text-white px-1"> {isSignInForm ? "Sign up now." : "Sign in now."} </span></p>
                        </div>
                    </form>
                </div>

            </div>

        </div>

    )
}