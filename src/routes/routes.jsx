import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Dashboard from "../pages/dashboard";
function Routes () {
    return (
        <RouterProvider
        router={createBrowserRouter([
          {
            path: "/",
            element: <Home/>,
          },
          {
            path: "dashboard",
            element: <Dashboard/>,
          },
        ])}
      />
    )
}
export default Routes;
