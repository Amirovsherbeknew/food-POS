import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";

import "./assets/styles/global.scss";

function App() {
  const [title, setTitle] = useState("Jaegar Rosta");

  return (
    <Layout title={title} setTitle={setTitle}>
      <RouterProvider
        router={createBrowserRouter([
          {
            path: "/",
            element: <Home setTitle={setTitle} />,
          },
          {
            path: "dashboard",
            element: <Dashboard setTitle={setTitle} />,
          },
        ])}
      />
    </Layout>
  );
}

export default App;
