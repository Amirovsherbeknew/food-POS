import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

import lagmon from "@/assets/images/lagmon.png";
import macaron from "@/assets/images/macaron.png";
import ramen from "@/assets/images/ramen.png";
import rollton from "@/assets/images/rollton.png";
import rolltonEgg from "@/assets/images/rollton_egg.png";
import xinkali from "@/assets/images/xinkali.png";

const useProductStore = create((set, get) => ({
  total: 0,
  selectText: "",
  handleSelectText: (text) => {
    set((state) => ({
      selectText: text,
    }));
  },
  filterFoods: (text) => {
    const foods = get().foodList;
    // console.log("Foods get", foods);
    const textLowered = text.toLowerCase();
    const foodsFiltered = foods.filter((foodItem) => {
      for (const word of foodItem.name.split(" ")) {
        const wordLowered = word.toLowerCase();
        if (wordLowered.startsWith(textLowered)) {
          return true;
        }
      }
      return false;
    });

    return foodsFiltered;
  },
  selectedFood: [],
  foodList: [
    {
      id: 1,
      image: lagmon,
      name: "Spicy seasoned seafood noodles",
      price: "2.29",
      available: "20 Bowls available",
      quantity: 0,
      note: "",
      isLoaded: false,
    },
    {
      id: 2,
      image: macaron,
      name: "Salted Pasta with mushroom sauce",
      price: "2.69",
      available: "11 Bowls available",
      quantity: 0,
      note: "",
      isLoaded: false,
    },
    {
      id: 3,
      image: ramen,
      name: "Beef dumpling in hot and sour soup",
      price: "2.99",
      available: "16 Bowls available",
      quantity: 0,
      note: "",
      isLoaded: false,
    },
    {
      id: 4,
      image: rollton,
      name: "Healthy noodle with spinach leaf",
      price: "3.29",
      available: "22 Bowls available",
      quantity: 0,
      note: "",
      isLoaded: false,
    },
    {
      id: 5,
      image: rolltonEgg,
      name: "Hot spicy fried rice with omelet",
      price: "3.29",
      available: "13 Bowls available",
      quantity: 0,
      note: "",
      isLoaded: false,
    },
    {
      id: 6,
      image: xinkali,
      name: "Spicy instant noodle with special omelette",
      price: "3.59",
      available: "17 Bowls available",
      quantity: 0,
      note: "",
      isLoaded: false,
    },
    {
      id: 7,
      image: lagmon,
      name: "Spicy seasoned seafood noodles",
      price: "2.29",
      available: "20 Bowls available",
      quantity: 0,
      note: "",
      isLoaded: false,
    },
    {
      id: 8,
      image: macaron,
      name: "Salted Pasta with mushroom sauce",
      price: "2.69",
      available: "11 Bowls available",
      quantity: 0,
      note: "",
      isLoaded: false,
    },
    {
      id: 9,
      image: ramen,
      name: "Beef dumpling in hot and sour soup",
      price: "2.99",
      available: "16 Bowls available",
      quantity: 0,
      note: "",
      isLoaded: false,
    },
    {
      id: 10,
      image: rollton,
      name: "Healthy noodle with spinach leaf",
      price: "3.29",
      available: "22 Bowls available",
      quantity: 0,
      note: "",
      isLoaded: false,
    },
    {
      id: 11,
      image: rolltonEgg,
      name: "Hot spicy fried rice with omelet",
      price: "3.29",
      available: "13 Bowls available",
      quantity: 0,
      note: "",
      isLoaded: false,
    },
    {
      id: 12,
      image: xinkali,
      name: "Spicy instant noodle with special omelette",
      price: "3.59",
      available: "17 Bowls available",
      quantity: 0,
      note: "",
      isLoaded: false,
    },
    {
      id: 13,
      image: lagmon,
      name: "Spicy seasoned seafood noodles",
      price: "2.29",
      available: "20 Bowls available",
      quantity: 0,
      note: "",
      isLoaded: false,
    },
  ],
  handleFoodListLoaded: (id) => {
    set((state) => ({
      foodList: state.foodList.map((foodItem) => {
        if (foodItem.id !== id) {
          return foodItem;
        }
        return {
          ...foodItem,
          isLoaded: true,
        };
      }),
    }));
  },
  addFoodItem: (obj) => {
    const newFoodItem = {
      ...obj,
      id: uuidv4(),
      available: "20 Bowls available",
      quantity: 0,
      note: "",
    };
    set((state) => ({
      foodList: state.foodList.concat(newFoodItem),
    }));
  },
  updateFoodItem: (obj) => {
    set((state) => ({
      foodList: state.foodList.map((foodItem) => {
        if (foodItem.id !== obj.id) {
          return foodItem;
        }
        return obj;
      }),
    }));
  },
  viewSelectProduct: (id) => {
    set((state) => {
      const newFoodList = state.foodList.map((item) => {
        if (item.id !== id) {
          return item;
        }
        return {
          ...item,
          quantity: Math.max(item.quantity, 1),
        };
      });
      state.calculateTotalPrice(newFoodList);
      return {
        selectedFood: !state.selectedFood.includes(id)
          ? state.selectedFood.concat(id)
          : state.selectedFood,
        foodList: newFoodList,
      };
    });
  },
  deleteSelectedProduct: (id) => {
    set((state) => {
      const newSelectedFood = state.selectedFood.filter((item) => item !== id);
      state.productQuantity(0, id);
      return {
        selectedFood: newSelectedFood,
      };
    });
  },
  productQuantity: (val, id) => {
    set((state) => {
      const newFoodList = state.foodList.map((item) => {
        if (item.id !== id) {
          return item;
        }
        return { ...item, quantity: val };
      });
      state.calculateTotalPrice(newFoodList);
      return { foodList: newFoodList };
    });
  },
  calculateTotalPrice: (foodList) => {
    set((state) => ({
      total: foodList.reduce((acc, item) => {
        acc += Number.parseFloat(item.price) * item.quantity;
        return acc;
      }, 0),
    }));
  },
  handleFoodNote: (text, ind) => {
    set((state) => ({
      foodList: state.foodList.map((item) => {
        if (item.id !== ind) return item;
        return { ...item, note: text };
      }),
    }));
  },
}));

export default useProductStore;
