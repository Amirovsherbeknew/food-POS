import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "@/pages/home";
import Dashboard from "@/pages/dashboard";
import Settings from "../pages/settings";

function Routes() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <Layout />,
          children: [
            { path: "/", element: <Home /> },
            { path: "dashboard", element: <Dashboard /> },
            { path: "settings", element: <Settings /> },
          ],
        },
      ])}
    />
  );
}
export default Routes;
