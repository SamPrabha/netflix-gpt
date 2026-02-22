import { Header } from "./Header"
import bodybg from "../assets/images/bodybg.jpg";
import { useState } from "react";
export const Login = () => {
    // state var for sign in/sign up toggle
    const [isSignInForm, setIsSignInForm] = useState(true);
    const handleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
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
                    <form className="p-4 bg-gradient-to-b from-black/75 via-black/65 to-black/85 w-96 h-fit">
                        <h1 className="text-white font-bold p-2 my-3 text-3xl"> {isSignInForm ? "Sign In" : "Sign Up"} </h1>
                        {!isSignInForm && <input type="text" className="bg-[#0a0b0c] border border-white p-4 my-3 w-full rounded-sm text-white" placeholder="Full Name" />}
                        <input type="text" className="bg-[#0a0b0c] border border-white p-4 my-3 w-full rounded-sm text-white" placeholder="Email Address" />
                        <input type="text" className="bg-[#0a0b0c] border border-white p-4 my-5 w-full rounded-sm text-white" placeholder="Password" />
                        <button type="button" className="bg-red-700 text-white p-4 w-full text-center my-6 rounded-sm"> {isSignInForm ? "Sign In" : "Sign Up"} </button>
                        <div className="p-4">
                            <p className="cursor-pointer text-center" onClick={handleSignInForm}><span className="text-gray-700"> {isSignInForm ? "New to Netflix?" : "Already a User?"} </span> <span className="text-white px-1"> {isSignInForm ? "Sign up now." : "Sign in now."} </span></p>
                        </div>
                    </form>
                </div>

            </div>

        </div>

    )
}