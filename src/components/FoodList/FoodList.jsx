import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Drawer, Flex } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";
import { withMask, useHookFormMask } from "use-mask-input";
import Nav from "./Nav";

import lagmon from "@/assets/images/lagmon.png";
import macaron from "@/assets/images/macaron.png";
import ramen from "@/assets/images/ramen.png";
import rollton from "@/assets/images/rollton.png";
import rolltonEgg from "@/assets/images/rollton_egg.png";
import xinkali from "@/assets/images/xinkali.png";

function FoodList({ seenFoodNav = false, seenFoodFilter = false }) {
  // Buttons state
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

  // Active button state
  const [btnInd, setbtnInd] = useState(0);

  const [paymentButtons, setPaymentButtons] = useState([
    {
      icon: <i className="fa-regular fa-credit-card"></i>,
      name: "Credit Card",
      status: true,
    },
    {
      icon: <i className="fa-brands fa-paypal"></i>,
      name: "Paypal",
      status: false,
    },
    {
      icon: <i className="fa-solid fa-wallet"></i>,
      name: "Cash",
      status: false,
    },
  ]);

  // Delivery price
  const [showDelivery, setShowDelivery] = useState(false);

  // Payment state
  const [showPayment, setShowPayment] = useState(false);

  // selected products list in drawer
  const [selectProductList, setSelectProductList] = useState([]);

  // Foods state
  const [foodList, setfoodList] = useState([
    {
      id: 1,
      image: lagmon,
      name: "Spicy seasoned seafood noodles",
      price: "2.29",
      available: "20 Bowls available",
      quantity: 0,
      note: "",
    },
    {
      id: 2,
      image: macaron,
      name: "Salted Pasta with mushroom sauce",
      price: "2.69",
      available: "11 Bowls available",
      quantity: 0,
      note: "",
    },
    {
      id: 3,
      image: ramen,
      name: "Beef dumpling in hot and sour soup",
      price: "2.99",
      available: "16 Bowls available",
      quantity: 0,
      note: "",
    },
    {
      id: 4,
      image: rollton,
      name: "Healthy noodle with spinach leaf",
      price: "3.29",
      available: "22 Bowls available",
      quantity: 0,
      note: "",
    },
    {
      id: 5,
      image: rolltonEgg,
      name: "Hot spicy fried rice with omelet",
      price: "3.29",
      available: "13 Bowls available",
      quantity: 0,
      note: "",
    },
    {
      id: 6,
      image: xinkali,
      name: "Spicy instant noodle with special omelette",
      price: "3.59",
      available: "17 Bowls available",
      quantity: 0,
      note: "",
    },
    {
      id: 7,
      image: lagmon,
      name: "Spicy seasoned seafood noodles",
      price: "2.29",
      available: "20 Bowls available",
      quantity: 0,
      note: "",
    },
    {
      id: 8,
      image: macaron,
      name: "Salted Pasta with mushroom sauce",
      price: "2.69",
      available: "11 Bowls available",
      quantity: 0,
      note: "",
    },
    {
      id: 9,
      image: ramen,
      name: "Beef dumpling in hot and sour soup",
      price: "2.99",
      available: "16 Bowls available",
      quantity: 0,
      note: "",
    },
    {
      id: 10,
      image: rollton,
      name: "Healthy noodle with spinach leaf",
      price: "3.29",
      available: "22 Bowls available",
      quantity: 0,
      note: "",
    },
    {
      id: 11,
      image: rolltonEgg,
      name: "Hot spicy fried rice with omelet",
      price: "3.29",
      available: "13 Bowls available",
      quantity: 0,
      note: "",
    },
    {
      id: 12,
      image: xinkali,
      name: "Spicy instant noodle with special omelette",
      price: "3.59",
      available: "17 Bowls available",
      quantity: 0,
      note: "",
    },
    {
      id: 13,
      image: lagmon,
      name: "Spicy seasoned seafood noodles",
      price: "2.29",
      available: "20 Bowls available",
      quantity: 0,
      note: "",
    },
  ]);

  // Total price
  const [total, setTotal] = useState(0);

  // Drawer state
  const [open, setOpen] = useState(false);

  // Form hook
  const { register, handleSubmit, reset } = useForm();

  // Mask input
  const registerWithMask = useHookFormMask(register);

  // Drawer handlers
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    if (showPayment) {
      setShowPayment(false);
      return;
    }
    setOpen(false);
  };

  const showChildrenDrawer = () => {
    setShowPayment(true);
  };
  const onChildrenClose = () => {
    setShowPayment(false);
  };

  // State handlers for buttons
  const handleButtons = (ind) => {
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
  };

  const handlePaymentButtons = (ind) => {
    if (paymentButtons[ind].status) return;
    setPaymentButtons(
      paymentButtons.map((item, id) => {
        if (id !== ind)
          return {
            ...item,
            status: false,
          };
        return {
          ...item,
          status: true,
        };
      })
    );
  };

  // selected foods filter handler
  const FilterFoodList = () => {
    return foodList.filter((item) => selectProductList.includes(item.id));
  };

  // selectProductList handlers
  const ViewSelectProduct = (id) => {
    if (!selectProductList.includes(id)) {
      setSelectProductList((selectProductList) => selectProductList.concat(id));
    }
    setOpen(true);
  };

  // delete from selected products handler
  const deleteSelectedProduct = (id) => {
    setSelectProductList((prevSelectProductList) => {
      const newSelectProductList = prevSelectProductList.filter(
        (item) => item !== id
      );
      ProductQuantity(0, id);
      return newSelectProductList;
    });
  };

  // quantity handler
  const ProductQuantity = (val, id) => {
    setfoodList((prevFoodList) => {
      const newFoodList = prevFoodList.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: val };
        } else return item;
      });
      totalPrice(newFoodList);
      return newFoodList;
    });
  };

  const totalPrice = (foodList) => {
    let sum = 0;
    for (const { price, quantity } of foodList) {
      sum += Number.parseFloat(price) * quantity;
    }
    setTotal(sum);
  };

  // food notes handler
  const handleFoodNote = (text, ind) => {
    console.log("Note input:", text);
    setfoodList(
      foodList.map((item) => {
        if (item.id !== ind) return item;
        return { ...item, note: text };
      })
    );
  };

  return (
    <>
      {/* Drawer (Modal) */}
      <Drawer
        mask={false}
        onClose={onClose}
        open={open}
        className={clsx(
          "!bg-[#1f1d2b] text-md !text-white",
          showPayment && "fixed right-[18.5rem]"
        )}
        width={"30rem"}
        title={
          <>
            {showPayment ? (
              <div
                className={clsx(
                  "flex items-center justify-between flex-wrap gap-4"
                )}
              >
                <div
                  className={clsx(
                    "col flex flex-col justify-between gap-y-4 gap-x-2"
                  )}
                >
                  <span className="text-[1.5rem]">Confirmation</span>
                  <span className="text-[1.1rem] text-[#ABBBC2] font-[500]">
                    Orders #34562
                  </span>
                </div>
                <div className={clsx("col flex items-center justify-center")}>
                  <button className={clsx("btn--active aspect-square")}>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            ) : (
              <span className="text-[1.1rem]">Orders #34562</span>
            )}
          </>
        }
        // closeIcon={false}
        closeIcon={
          showPayment ? (
            <i className="fa-solid fa-arrow-left-long text-white"></i>
          ) : (
            <i className="fa-solid fa-xmark text-white"></i>
          )
        }
        headerStyle={{
          borderBottom: `${showPayment ? "1px solid #393C49" : "none"}`,
        }}
      >
        <div
          className={clsx(
            "relative overflow-auto pb-8",
            btnInd !== 2 ? "!h-[57vh]" : "!h-55vh"
          )}
        >
          {/* Buttons */}
          <Flex gap="small" wrap>
            {btns.map((item, ind) => (
              <button
                key={ind}
                className={clsx(
                  item.status && "btn--active",
                  !item.status && "btn"
                )}
                onClick={() => handleButtons(ind)}
              >
                {item.name}
              </button>
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
              {FilterFoodList().map((item) => (
                <div
                  key={item.id}
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
                              $ {item.price}
                            </div>
                          </div>
                        </div>
                        <input
                          type="number"
                          min="0"
                          className="col-inner-second input"
                          value={item.quantity}
                          onChange={(e) =>
                            ProductQuantity(e.target.value, item.id)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-second w-[15%] flex justify-center text-center text-[1.1rem]">
                      ${" "}
                      {(Number.parseFloat(item.price) * item.quantity).toFixed(
                        3
                      )}
                    </div>
                  </div>
                  <div className="mt-4 flex-outer flex items-center gap-4 text-[1rem]">
                    <div className="col-first w-[85%] text-[0.9rem]">
                      <input
                        type="text"
                        placeholder="Please, just a little bit spicy only."
                        value={item.note || ""}
                        className="input-note"
                        onChange={(e) =>
                          handleFoodNote(e.target.value, item.id)
                        }
                      />
                    </div>
                    <div
                      onClick={(e) => deleteSelectedProduct(item.id)}
                      className="col-second w-[15%] aspect-square rounded-[8px] border-[1px] border-[#FF7CA3] flex justify-center items-center text-center text-[#FF7CA3] cursor-pointer duration-500 hover:border-red-700 hover:text-red-700"
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
          {btnInd === 2 && (
            <div className="flex-discount flex flex-wrap justify-between items-center gap-4 font-[400]">
              <span className="block text-[#ABBBC2] text-[1rem]">Delivery</span>
              <span className="block">$ {(total * 0.1).toFixed(3)}</span>
            </div>
          )}
          <div
            className={clsx(
              "flex-discount flex flex-wrap justify-between items-center gap-4 font-[400]",
              btnInd === 2 && "mt-4"
            )}
          >
            <span className="block text-[#ABBBC2] text-[1rem]">Discount</span>
            <span className="block">$0</span>
          </div>
          <div className="flex-subtotal mt-4 flex flex-wrap justify-between items-center gap-4 font-[400]">
            <span className="block text-[#ABBBC2] text-[1rem]">Sub total</span>
            <span className="block">
              $ {btnInd === 2 ? (total * 1.1).toFixed(3) : total.toFixed(3)}
            </span>
          </div>
          <button className="btn-large" onClick={showChildrenDrawer}>
            Continue to Payment
          </button>
        </div>

        <Drawer
          mask={false}
          title={
            <>
              <span className="text-[1.5rem]">Payment</span>
              <span className="text-[1.1rem] mt-4 text-[#ABBBC2]">
                3 payment method available
              </span>
            </>
          }
          onClose={onChildrenClose}
          open={showPayment}
          className="!bg-[#1f1d2b] text-md !text-white !z-10 !border-t-[#1F1D2B] !border-r-[#1F1D2B] !border-b-[#1F1D2B] !border-l-[#393C49] border-2"
          width={"30rem"}
          closeIcon={<i className="fa-solid fa-xmark text-white"></i>}
          headerStyle={{ border: "1px solid #393C49" }}
        >
          <div className="text-[1.2rem]">Payment Method</div>
          <div className="payment-flex mt-4 flex items-center justify-start gap-2">
            {paymentButtons.map((item, ind) => (
              <div
                key={ind}
                className={clsx(
                  item.status && "btn-secondary--active",
                  !item.status && "btn-secondary"
                )}
                onClick={() => handlePaymentButtons(ind)}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
                <span className="tick">
                  <i className="fa-solid fa-check"></i>
                </span>
              </div>
            ))}
          </div>
          {paymentButtons[0].status && (
            <form
              className="mt-4"
              onSubmit={handleSubmit((formdata) => console.log(formdata))}
            >
              <label htmlFor="cardholder" className="block text-small">
                Cardholder Name
              </label>
              <input
                type="text"
                className="input-note mt-2"
                name="card-holder"
                id="cardholder"
              />
              <label htmlFor="card-number" className="block text-small mt-4">
                Card Number
              </label>
              <input
                type="text"
                className="input-note mt-2"
                id="card-number"
                name="card-number"
                {...registerWithMask("card-number", "9{4} 9{4} 9{4} 9{4}")}
                required
              />
              <div className="input-flex flex items-center justify-between gap-4">
                <div className="input-flex__item">
                  <label
                    htmlFor="expiration-date"
                    className="block text-small mt-4"
                  >
                    Expiration Date
                  </label>
                  <input
                    type="text"
                    className="input-note mt-2"
                    id="expiration-date"
                    {...registerWithMask("expiration-date", "datetime", {
                      inputFormat: "mm/yyyy",
                    })}
                    required
                  />
                </div>
                <div className="input-flex__item">
                  <label htmlFor="cvv" className="block text-small mt-4">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="input-note mt-2 text-gray-400 font-bold tracking-[0.5rem]"
                    autoComplete="off"
                    id="cvv"
                    {...registerWithMask("cvv", "9{3}")}
                    onMouseOver={(e) => (e.currentTarget.type = "text")}
                    onMouseOut={(e) => (e.currentTarget.type = "password")}
                    required
                  />
                </div>
              </div>
              <hr />
              <div className="input-flex flex items-center justify-between gap-4">
                <div className="input-flex__item">
                  <label htmlFor="order-type" className="block text-small mt-4">
                    Order type
                  </label>
                  <div className="select mt-2 px-4 py-4 text-[1rem]">
                    <span className="select-icon">
                      <i className="fa-solid fa-angle-down"></i>
                    </span>
                    <select
                      className="flex items-center"
                      htmlFor="order-type"
                      name="order-type"
                    >
                      <option value="dine-in">Dine In</option>
                    </select>
                  </div>
                </div>
                <div className="input-flex__item">
                  <label htmlFor="table-no" className="block text-small mt-4">
                    Table no.
                  </label>
                  <input
                    type="text"
                    className="input-note mt-2 text-gray-400 font-bold tracking-[0.5rem]"
                    id="table-no"
                    {...registerWithMask("table-no", "9{3}")}
                    required
                  />
                </div>
              </div>
              <div className="button-flex mt-20 flex items-center justify-between gap-4">
                <div className="button-flex__item w-full">
                  <button
                    className="btn-large--inverted"
                    onClick={() => reset()}
                  >
                    Cancel
                  </button>
                </div>
                <div className="button-flex__item w-full">
                  <button className="btn-large" type="submit">
                    Confirm payment
                  </button>
                </div>
              </div>
            </form>
          )}
        </Drawer>
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
        {foodList.map((item, ind) => (
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
