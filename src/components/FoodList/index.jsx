import Nav from "./Nav";

import lagmon from "../../assets/images/lagmon.png";

const foods = [
  {
    image: lagmon,
    name: "Spicy seasoned seafood noodles",
    price: "$ 2.29",
    available: "20 Bowls available",
  },
  {
    image: lagmon,
    name: "Spicy seasoned seafood noodles",
    price: "$ 2.29",
    available: "20 Bowls available",
  },
  {
    image: lagmon,
    name: "Spicy seasoned seafood noodles",
    price: "$ 2.29",
    available: "20 Bowls available",
  },
  {
    image: lagmon,
    name: "Spicy seasoned seafood noodles",
    price: "$ 2.29",
    available: "20 Bowls available",
  },
  {
    image: lagmon,
    name: "Spicy seasoned seafood noodles",
    price: "$ 2.29",
    available: "20 Bowls available",
  },
  {
    image: lagmon,
    name: "Spicy seasoned seafood noodles",
    price: "$ 2.29",
    available: "20 Bowls available",
  }, {
    image: lagmon,
    name: "Spicy seasoned seafood noodles",
    price: "$ 2.29",
    available: "20 Bowls available",
  }, {
    image: lagmon,
    name: "Spicy seasoned seafood noodles",
    price: "$ 2.29",
    available: "20 Bowls available",
  }, {
    image: lagmon,
    name: "Spicy seasoned seafood noodles",
    price: "$ 2.29",
    available: "20 Bowls available",
  }, {
    image: lagmon,
    name: "Spicy seasoned seafood noodles",
    price: "$ 2.29",
    available: "20 Bowls available",
  },
];

function FoodList({ seenFoodNav = false, seenFoodFilter = false }) {
  return (
    <>
      {seenFoodNav && <Nav />}
      {seenFoodFilter && (
        <div className="filter mt-[1.5rem] flex flex-wrap justify-between items-center">
          <span className="text-md">Choose dishes</span>
          <div className="select">
            <span className="select-icon">
              <i className="fa-solid fa-angle-down"></i>
            </span>
            <select>
              <option value="lorem">Lorem</option>
            </select>
          </div>
        </div>
      )}
      <div className="w-full flex flex-wrap gap-[4rem_5rem]">
        {foods.map((item, ind) => (
          <div key={ind} className="food-card--sm">
            <img src={item.image} />
            <div className="food-name">{item.name}</div>
            <div className="food-price">{item.price}</div>
            <div className="food-available">{item.available}</div>
            <div className="food-card--sm-back"></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FoodList;
