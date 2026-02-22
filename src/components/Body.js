import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { BrowsePage } from "./BrowsePage"
import { Login } from "./Login"
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
        }
    ])

    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    )
}