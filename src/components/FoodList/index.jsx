import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Button, Drawer, Flex } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import Nav from "./Nav";

import lagmon from "@/assets/images/lagmon.png";

function convertNumber(alphaNum) {
  alphaNum = alphaNum.split("");
  let i = 0;
  while (
    i < alphaNum.length &&
    (Number.isNaN(+alphaNum[i]) || alphaNum[i] === " ")
  )
    i++;
  return Number.parseFloat(alphaNum.slice(i).join(""));
}

function FoodList({ seenFoodNav = false, seenFoodFilter = false }) {
  const [selectProductList, setSelectProductList] = useState([]);
  // Buttons logic
  const [btns, setBtns] = useState([
    {
      name: "Dine In",
      status: true,
    },
    {
      name: "To Go",
      status: false,
    },
    {
      name: "Delivery",
      status: false,
    },
  ]);

  // Active button index
  const [btnInd, setbtnInd] = useState(0);

  // Foods
  const [foodLst, setFoodLst] = useState([
    {
      id: 1,
      image: lagmon,
      name: "Spicy seasoned seafood noodles",
      price: "$ 2.29",
      available: "20 Bowls available",
      quantity: 0,
      note: "",
    },
    {
      id: 2,
      image: lagmon,
      name: "Spicy seasoned seafood noodles",
      price: "$ 2.29",
      available: "20 Bowls available",
      quantity: 0,
      note: "",
    },
    {
      id: 3,
      image: lagmon,
      name: "Spicy seasoned seafood noodles",
      price: "$ 2.29",
      available: "20 Bowls available",
      quantity: 0,
      note: "",
    },
    {
      id: 4,
      image: lagmon,
      name: "Spicy seasoned seafood noodles",
      price: "$ 2.29",
      available: "20 Bowls available",
      quantity: 0,
      note: "",
    },
    {
      id: 5,
      image: lagmon,
      name: "Spicy seasoned seafood noodles",
      price: "$ 2.29",
      available: "20 Bowls available",
      quantity: 0,
      note: "",
    },
    {
      id: 6,
      image: lagmon,
      name: "Spicy seasoned seafood noodles",
      price: "$ 2.29",
      available: "20 Bowls available",
      quantity: 0,
      note: "",
    },
    {
      id: 7,
      image: lagmon,
      name: "Spicy seasoned seafood noodles",
      price: "$ 2.29",
      available: "20 Bowls available",
      quantity: 0,
      note: "",
    },
    {
      id: 8,
      image: lagmon,
      name: "Spicy seasoned seafood noodles",
      price: "$ 2.29",
      available: "20 Bowls available",
      quantity: 0,
      note: "",
    },
    {
      id: 9,
      image: lagmon,
      name: "Spicy seasoned seafood noodles",
      price: "$ 2.29",
      available: "20 Bowls available",
      quantity: 0,
      note: "",
    },
    {
      id: 10,
      image: lagmon,
      name: "Spicy seasoned seafood noodles",
      price: "$ 2.29",
      available: "20 Bowls available",
      quantity: 0,
      note: "",
    },
    {
      id: 11,
      image: lagmon,
      name: "Spicy seasoned seafood noodles",
      price: "$ 2.29",
      available: "20 Bowls available",
      quantity: 0,
      note: "",
    },
    {
      id: 12,
      image: lagmon,
      name: "Spicy seasoned seafood noodles",
      price: "$ 2.29",
      available: "20 Bowls available",
      quantity: 0,
      note: "",
    },
    {
      id: 13,
      image: lagmon,
      name: "Spicy seasoned seafood noodles",
      price: "$ 2.29",
      available: "20 Bowls available",
      quantity: 0,
      note: "",
    },
  ]);

  // Total price
  const [total, setTotal] = useState(0);

  // Drawer logic
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  // State handlers for buttons
  function handleButtons(ind) {
    if (!btns[ind].status) {
      setBtns([
        ...btns.slice(0, ind).map((item) => ({
          ...item,
          status: false,
        })),
        {
          name: btns[ind].name,
          status: true,
        },
        ...btns.slice(ind + 1).map((item) => ({
          ...item,
          status: false,
        })),
      ]);
      setbtnInd(ind);
    }
  }
  const FilterFoodList = () => {
    return foodLst.filter(item => selectProductList.includes(item.id))
  }
  // State handlers for foods
  function handleFoodQuantity(ind) {
    setFoodLst([
      ...foodLst.slice(0, ind),
      {
        ...foodLst[ind],
        quantity: foodLst[ind].quantity + 1,
      },
      ...foodLst.slice(ind + 1),
    ]);
  }

  const ViewSelectProduct = (id) => {
    if (!selectProductList.includes(id)) {
      selectProductList.push(id);
    }
    FilterFoodList()
    setOpen(true);
  };
  const ProductQuantity = (val, id) => {
    let totalPrice = 0
    setFoodLst(
      foodLst.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: val };
        } else return item;
      })
    );
    for (let i = 0; i < array.length; i++) {
      
    }
  };
  function handleFoodNote(text, ind) {
    setFoodLst([
      ...foodLst.slice(0, ind),
      {
        ...foodLst[ind],
        note: text,
      },
      ...foodLst.slice(ind + 1),
    ]);
  }
  return (
    <>
      {/* Drawer (Modal) */}
      <Drawer
        onClose={onClose}
        open={open}
        className="!bg-[#1f1d2b] text-md !text-white"
        title="Orders #34562"
        width={"30rem"}
      >
        <div className="relative !h-[57vh] overflow-auto pb-8">
          {/* Buttons */}
          <Flex gap="small" wrap>
            {btns.map((item, ind) => (
              <Button
                key={ind}
                className={clsx(
                  item.status &&
                    "border-none bg-[#ea7c69] text-white hover:!border-solid hover:!border-[2px] hover:!border-[#393C49] hover:!bg-inherit hover:!text-[#ea7c69]",
                  !item.status &&
                    "border-[2px] border-[#393C49] bg-inherit text-[#ea7c69] hover:!border-none hover:!bg-[#ea7c69] hover:!text-white",
                  "duration-500"
                )}
                onClick={() => handleButtons(ind)}
              >
                {item.name}
              </Button>
            ))}
          </Flex>

          {/* Din In contents */}
          {!btnInd && (
            <div className="drawer__content absolute top-16 w-full">
              <div className="flex-outer pr-4 flex gap-4 text-[1rem]">
                <div className="col-first w-[85%]">
                  <div className="flex-inner flex justify-between gap-4">
                    <div className="col-inner-first w-[80%]">Item</div>
                    <div className="col-inner-second text-center w-[20%]">
                      Qty
                    </div>
                  </div>
                </div>
                <div className="col-second w-[15%] flex justify-center text-center">
                  Price
                </div>
              </div>
              {FilterFoodList().map((item, ind) => (
                  <div
                    key={ind}
                    className="food-card mt-2 px-4 py-4 rounded-[8px] duration-400 hover:shadow-food-card"
                  >
                    <div className="flex-outer flex items-center gap-4 text-[1rem]">
                      <div className="col-first w-[85%]">
                        <div className="flex-inner flex justify-between items-center gap-4">
                          <div className="food-card__desc w-[80%] flex items-center gap-[1rem]">
                            <img
                              src={item.image}
                              className="food-card__image h-14 w-14 rounded-full object-cover object-center"
                            />
                            <div className="food-card__info flex flex-col justify-between text-[0.95rem]">
                              <div className="food-card__name">
                                Spicy seasoned sea...
                              </div>
                              <div className="food-card__price text-[#ABBBC2]">
                                {item.price}
                              </div>
                            </div>
                          </div>
                          <input
                            type="text"
                            className="col-inner-second aspect-square w-[20%] h-fit px-2 py-2 rounded-[8px] border-[1px] border-[#393C49] bg-[#2D303E] flex items-center justify-center text-[1.1rem]"
                            value={item.quantity}
                            onChange={(e) =>
                              ProductQuantity(e.target.value, item.id)
                            }
                          />
                        </div>
                      </div>
                      <div className="col-second w-[15%] flex justify-center text-center text-[1.1rem]">
                        $ {convertNumber(item.price) * item.quantity}
                      </div>
                    </div>
                    <div className="mt-4 flex-outer flex items-center gap-4 text-[1rem]">
                      <div className="col-first w-[85%] text-[0.9rem]">
                        <input
                          type="text"
                          placeholder="Please, just a little bit spicy only."
                          value={item.note || ""}
                          className="rounded-[8px] outline-none border-[1px] border-[#393C49] w-full !h-full px-4 py-[1rem] bg-[#2D303E] flex items-center font-[400] text-[1rem]"
                          onChange={(e) => handleFoodNote(e.target.value, ind)}
                        />
                      </div>
                      <div
                        onClick={(e) => handleFoodNote("", ind)}
                        className="col-second w-[15%] aspect-square rounded-[8px] border-[1px] border-[#FF7CA3] flex justify-center items-center text-center text-[#FF7CA3] cursor-pointer duration-500 hover:bg-black"
                      >
                        <DeleteOutlined />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/*  food cards footer */}
        <div className="drawer__footer absolute left-6 right-6 bottom-0 pt-6 pb-4 border-t-2 border-t-[#393C49] !bg-[#1F1D2B] z-[1] !text-[1.2rem]">
          <div className="flex-discount flex flex-wrap justify-between items-center gap-4 font-[400]">
            <span className="block text-[#ABBBC2] text-[1rem]">Discount</span>
            <span className="block">$0</span>
          </div>
          <div className="flex-subtotal mt-4 flex flex-wrap justify-between items-center gap-4 font-[400]">
            <span className="block text-[#ABBBC2] text-[1rem]">Sub total</span>
            <span className="block">$ {total.toFixed(3)}</span>
          </div>
          <button className="mt-10 mb-4 w-full rounded-[8px] py-4 bg-[#EA7C69] text-[1rem] shadow-sidebar-effect">
            Continue to Payment
          </button>
        </div>
      </Drawer>
      {/* Foods Nav */}
      {!seenFoodNav || <Nav />}
      {/* Foods Filter */}
      {seenFoodFilter && (
        <div className="filter mt-[1.5rem] flex flex-wrap justify-between items-center !text-white">
          <span className="text-md">Choose dishes</span>
          <div className="select">
            <span className="select-icon">
              <i className="fa-solid fa-angle-down"></i>
            </span>
            <select>
              <option value="dine-in">Dine In</option>
            </select>
          </div>
        </div>
      )}
      {/* Foods Cards on content side */}
      <div className="w-full flex flex-wrap gap-[2rem_3rem]">
        {foodLst.map((item, ind) => (
          <div
            key={ind}
            className="food-card--sm cursor-pointer !text-white"
            onClick={() => ViewSelectProduct(item.id)}
          >
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
