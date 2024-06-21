import FoodList from "../../components/FoodList";
function Home() {
  return (
    <div>
      <FoodList seenFoodNav={true} seenFoodFilter={true} />
    </div>
  );
}
export default Home;
