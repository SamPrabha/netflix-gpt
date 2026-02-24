import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { BrowsePage } from "./BrowsePage";
import { Login } from "./Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { ErrorPage } from "./ErrorPage";
export const Body = () => {
    const user_Dispatch = useDispatch();
    // add auth event listener once
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, password, displayName } = user;
                user_Dispatch(addUser({ uid: uid, email: email, password: password, displayName: displayName }));
            } else {
                // User is signed out
                user_Dispatch(removeUser());
            }
        });
    }, [])

    // setup routing
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <BrowsePage />
        },
        {
            path: "/error",
            element: <ErrorPage />
        }
    ])

    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    )
}