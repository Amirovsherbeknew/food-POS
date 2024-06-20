import { useLocation } from "react-router-dom";

import data from "../../data.json";
import { useEffect } from "react";

function Dashboard({ setTitle }) {
  const location = useLocation();

  useEffect(() => {
    setTitle(data.title[location.pathname]);
  }, []);

  return <div>Dashboard</div>;
}

export default Dashboard;
