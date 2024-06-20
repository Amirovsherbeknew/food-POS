import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import data from "../../data.json";
import FoodList from "../../components/FoodList";

function Home({ setTitle }) {
  const location = useLocation();

  useEffect(() => {
    setTitle(data.title[location.pathname]);
  }, []);

  return (
    <div>
      <FoodList seenFoodNav={true} seenFoodFilter={true} />
    </div>
  );
}

export default Home;
