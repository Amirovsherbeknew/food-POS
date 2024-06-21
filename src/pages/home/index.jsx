import FoodList from "@/components/FoodList";
function Home() {
  return (
    <div>
      <FoodList seenFoodNav={true} seenFoodFilter={false} />
    </div>
  );
}
export default Home;
