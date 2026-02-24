import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { BrowsePage } from "./BrowsePage";
import { Login } from "./Login";

import { ErrorPage } from "./ErrorPage";
export const Body = () => {

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