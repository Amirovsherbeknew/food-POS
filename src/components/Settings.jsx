import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import useProductStore from "../store/store";
import { Tabs } from "antd";
import {
  ShopOutlined,
  UnlockOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

import filterIcon from "../assets/icons/filter.png";
import Spinner from "../animations/Spinner";

// Settings content Nav Links
const navLinks = [
  {
    to: "#",
    value: "Hot Dishes",
  },
  {
    to: "#",
    value: "Cold Dishes",
  },
  {
    to: "#",
    value: "Soup",
  },
  {
    to: "#",
    value: "Grill",
  },
  {
    to: "#",
    value: "Appetizer",
  },
  {
    to: "#",
    value: "Dessert",
  },
  {
    to: "#",
    value: "Foods for specific ingredients",
  },
];

function Settings() {
  const ref = useRef();
  // Foods state
  const foodList = useProductStore((state) => state.foodList);
  // Food add function
  const addFoodItem = useProductStore((state) => state.addFoodItem);
  // Food update function
  const updateFood = useProductStore((state) => state.updateFoodItem);

  // Update item object
  const [updateFoodItem, setUpdateFoodItem] = useState(null);

  // Nav active tab key
  const [key, setKey] = useState(null);

  // Text in search
  const selectText = useProductStore((state) => state.selectText);
  const [datas, setDatas] = useState([]);
  // Error message for fetch
  const [errorMessage, setErrorMessage] = useState("");
  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  // Nav Items
  const items = navLinks.map((navLinkItem, ind) => ({
    key: String(ind),
    label: (
      <Link to="#" className="!text-inherit">
        {navLinkItem.value}
      </Link>
    ),
    children:
      ind === 0 ? (
        <div className="food-cards-wrapper h-[63vh] overflow-y-auto mt-4">
          <div className="food-cards grid grid-cols-3 gap-x-4 gap-y-6 px-4 py-4">
            <div
              key={uuidv4()}
              className="food-card-add h-[23.5rem] border-[#ea7c69] border-[1px] border-dashed rounded-[10px] flex flex-col justify-center items-center gap-4 text-[#EA7C69] font-[600] cursor-pointer duration-500 hover:translate-y-[-0.6rem]"
              onClick={() => setIsOpenModal(true)}
            >
              <span className="block text-md">
                <i className="fa-solid fa-plus"></i>
              </span>
              <span className="text-[1.3rem]">Add new dish</span>
            </div>
            {foodList?.map((item) => (
              <div key={item.id} className="food-card--lg">
                <div className="card-content">
                  <LazyLoadImage
                    src={item.image}
                    effect="blur"
                    className="food-card__image"
                    wrapperProps={{
                      // If you need to, you can tweak the effect transition using the wrapper style.
                      style: { transitionDelay: "0.5s" },
                    }}
                  />
                  <div className="food-card__title !text-white">
                    {item.name}
                  </div>
                  <div className="food-card__num-infos">
                    <div className="col ">$ {item.price}</div>
                    <div className="col text-[0.5rem] !text-white">
                      <i className="fa-solid fa-circle"></i>
                    </div>
                    <div className="col">20 Bowls</div>
                  </div>
                </div>
                <div
                  className="card-edit"
                  onClick={() => {
                    setUpdateFoodItem((prevItem) => item);
                    setFoodName(item.name);
                    setFoodPrice(item.price);
                    setFoodImage(item.image);
                    setIsOpenModal(true);
                  }}
                >
                  <div
                    className="card-edit__text"
                    style={{ cursor: "pointer" }}
                  >
                    <span>
                      <i className="fa-regular fa-pen-to-square"></i>
                    </span>
                    <span>Edit Dish</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : ind === 6 ? (
        <>
          <div className="my-8 text-white flex justify-center items-center">
            {isLoading ? (
              <Spinner />
            ) : errorMessage ? (
              <h1 className="text-[#ea7c69] text-[4rem] font-bold">
                {errorMessage}
              </h1>
            ) : (
              <div className="max-h-[60vh] overflow-auto p-4 grid grid-cols-3 gap-x-4 gap-y-6">
                {datas?.meals?.map((mealObj, ind) => (
                  <>
                    <div className="datameal-card text-center" key={ind}>
                      <div className="flex items-center justify-center">
                        {/* <LazyLoadImage
                          src={mealObj?.strMealThumb}
                          alt={mealObj?.strMeal + " food"}
                          className="max-w-[100%] max-h-[100%]"
                          effect="blur"
                          wrapperProps={{
                            // If you need to, you can tweak the effect transition using the wrapper style.
                            style: { transitionDelay: "1s" },
                          }}
                        /> */}
                        <LazyLoadImage
                          src={mealObj?.strMealThumb}
                          alt={mealObj?.strMeal + " food"}
                          className="max-w-[100%] max-h-[100%]"
                          effect="blur"
                        />
                      </div>
                      <div className="text-[#ea7c69] mt-4 text-center font-semibold text-xl">
                        {mealObj?.strMeal}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        <></>
      ),
  }));

  // Settings Bar states
  const [linksSettings, setLinksSettings] = useState([
    {
      selected: false,
      icon: <i className="fa-regular fa-heart"></i>,
      title: "Appereance",
      desc: "Dark and Light mode, Font size",
    },
    {
      selected: false,
      icon: <ShopOutlined />,
      title: "Your Restaurant",
      desc: "Dark and Light mode, Font size",
    },
    {
      selected: false,
      icon: <i className="fa-solid fa-percent"></i>,
      title: "Products Management",
      desc: "Manage your product, pricing, etc",
    },
    {
      selected: false,
      icon: <i className="fa-regular fa-bell"></i>,
      title: "Notifications",
      desc: "Customize your notifications",
    },
    {
      selected: false,
      icon: <UnlockOutlined />,
      title: "Security",
      desc: "Configure Password, PIN, etc",
    },
    {
      selected: false,
      icon: <InfoCircleOutlined />,
      title: "About Us",
      desc: "Find out more about Posly",
    },
  ]);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const [foodName, setFoodName] = useState("");

  const [foodPrice, setFoodPrice] = useState(0);

  const [foodImage, setFoodImage] = useState("");
  const [validImage, setValidImage] = useState(false);
  const [imageError, setImageError] = useState("");

  const {
    reset,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Handling Bar states
  const handleLinkClick = (ind) => {
    // console.log(linksSettings, ind);

    setLinksSettings(
      linksSettings?.map((item, id) => ({
        ...item,
        selected: !item.selected && ind === id,
      }))
    );
  };

  // Checking wheter image url is valid or not
  const validateImageUrl = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => reject(new Error("Invalid image URL"));
      img.src = url;
    });
  };

  // Submitting form
  const handleFormSubmit = async (data) => {
    if (foodName.trim() && foodPrice.trim() && validImage) {
      updateFoodItem
        ? updateFood({ ...updateFoodItem, ...data })
        : addFoodItem(data);
      setIsOpenModal(false);
      alert(
        "Food product was successfully " +
          (updateFoodItem ? "updated" : "added")
      );

      setFoodName("");
      setFoodPrice(0);
      setFoodImage("");
      reset();
    } else {
      alert("Food name, price, or image is invalid");
    }
  };

  const BASE_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=";
  const getFoodList = async () => {
    console.log("Get Food List Fetch");
    const options = {
      method: "get",
      url: BASE_URL + selectText,
    };
    const prevTimestamp = Date.now() / 1000;
    setIsLoading(true);
    try {
      const res = await axios.request(options);
      // console.log("Url", options.url);
      // console.log("Response", res);
      if (res.data) {
        setDatas(res.data);
      } else {
        setErrorMessage("Nothing has come, try again!!!");
      }
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      const currTimestamp = Date.now() / 1000;
      const diff = currTimestamp - prevTimestamp;
      if (diff > 1) {
        setIsLoading(false);
      } else {
        const timeout = setTimeout(() => {
          setIsLoading(false);
          clearTimeout(timeout);
        }, (1 - diff) * 1000);
      }
    }
  };

  useEffect(() => {
    const handleValidate = async () => {
      try {
        // console.log(foodList);
        await validateImageUrl(foodImage);
        setValidImage(true);
        setImageError("");
      } catch (error) {
        setValidImage(false);
        setImageError(error.message);
      }
    };
    handleValidate();
  }, [foodImage]);

  useEffect(() => {
    setErrorMessage("");
    getFoodList();
  }, [selectText]);

  return (
    <>
      <div className="mt-8 h-[86vh] w-[100%] flex justify-between gap-4 text-white">
        {/* settings bar */}
        <div className="settings__bar rounded-md w-[22%] bg-[#1f1d2b]">
          {linksSettings?.map((item, ind) => (
            <div
              key={ind}
              className={clsx(
                "settings__link relative cursor-pointer px-8 py-[1.5rem] flex gap-2 duration-500",
                "after:absolute after:content-[' '] after:left-full after:top-[50%] after:h-[45%] after:translate-x-[-50%] after:translate-y-[-50%] after:rounded-[8px] after:bg-[#EA7C69] !after:duration-1000",
                "hover:bg-[#ea7c6942] hover:text-[#ea7c69] hover:after:w-1",
                item.selected &&
                  "relative bg-[#ea7c6942] text-[#ea7c69] after:absolute after:content-[' '] after:left-full after:top-[50%] after:w-1 after:h-[45%] after:translate-x-[-50%] after:translate-y-[-50%] after:rounded-[8px] after:bg-[#EA7C69] duration-1000"
              )}
              onClick={() => handleLinkClick(ind)}
            >
              <div className="col">
                <div>{item.icon}</div>
              </div>
              <div className="col">
                <div className="settings__link-title">{item.title}</div>
                <div className="settings__link-desc text-[0.85rem] !text-[#ABBBC2]">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* settings content */}
        <div className="settings__content rounded-md w-[77%] p-6 bg-[#1f1d2b]">
          {linksSettings[2].selected && (
            <>
              {/* settings content header */}
              <div className="settings__content-header flex justify-between items-center gap-4">
                <div className="header__title text-[1.4rem] font-[600]">
                  Products Management
                </div>
                <div className="header__button rounded-[10px] border-[1px] border-[#393C49] p-4 flex items-center gap-4 ">
                  <img src={filterIcon} />
                  <span className="text-[1rem] font-[600]">
                    Manage Categories
                  </span>
                </div>
              </div>

              {/* settings content navbar newer version using ant design tabs  */}
              <Tabs
                defaultActiveKey="1"
                items={items}
                onChange={(key) => {
                  console.log(key);
                  setKey(key);
                }}
                tabBarStyle={{ color: "white !important", fontWeight: "500" }}
              ></Tabs>
              <hr />

              {/* settings content navbar previous version  */}
              {/* <div className={clsx("mt-[1.2rem] flex gap-8 flex-wrap")}>
                {navLinks?.map((item, index) => (
                  <div
                    key={index}
                    to={item.to || "#"}
                    className={clsx(
                      "relative font-[600] text-[0.875rem] text-[white] duration-400 cursor-pointer",
                      "after:block after:content-[' '] after:absolute after:bottom-[-1rem] after:w-[0] after:h-[3px] after:bg-[#ea7c69]",
                      "hover:text-[#ea7c69] hover:after:w-[70%]",
                      item.selected && "!text-[#ea7c69] after:w-[70%]"
                    )}
                  >
                    {item.value}
                  </div>
                ))}
              </div>
              <hr /> */}

              {/* Food cards */}

              {/* {navLinks[0].selected && (
                <div className="food-cards-wrapper h-[63vh] overflow-y-auto mt-4">
                  <div className="food-cards grid grid-cols-3 gap-x-4 gap-y-6 px-4 py-4">
                    <div
                      key={uuidv4()}
                      className="food-card-add h-[23.5rem] border-[#ea7c69] border-[1px] border-dashed rounded-[10px] flex flex-col justify-center items-center gap-4 text-[#EA7C69] font-[600] cursor-pointer duration-500 hover:translate-y-[-0.6rem]"
                      onClick={() => setIsOpenModal(true)}
                    >
                      <span className="block text-md">
                        <i className="fa-solid fa-plus"></i>
                      </span>
                      <span className="text-[1.3rem]">Add new dish</span>
                    </div>
                    {foodList?.map((item) => (
                      <div key={item.id} className="food-card--lg">
                        <div className="card-content">
                          <img src={item.image} className="food-card__image" />
                          <div className="food-card__title">{item.name}</div>
                          <div className="food-card__num-infos">
                            <div className="col ">$ {item.price}</div>
                            <div className="col text-[0.5rem] !text-white">
                              <i className="fa-solid fa-circle"></i>
                            </div>
                            <div className="col">20 Bowls</div>
                          </div>
                        </div>
                        <div className="card-edit">
                          <div className="card-edit__text">
                            <span>
                              <i className="fa-regular fa-pen-to-square"></i>
                            </span>
                            <span>Edit Dish</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )} */}
            </>
          )}
        </div>
      </div>

      {isOpenModal && (
        <div
          className="modal-overlay fixed top-0 left-0 w-[100%] h-[100vh] !bg-[rgba(0,0,0,0.5)] !z-10"
          onClick={() => {
            console.log("Overlay closed");
            setFoodName("");
            setFoodPrice(0);
            setFoodImage("");
            setUpdateFoodItem(null);
            setIsOpenModal(false);
          }}
        >
          <div
            className="modal absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-md w-[40%] h-[85%] bg-white !z-15 flex text-center px-8 py-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="absolute top-[1.5rem] right-[2rem] text-[1.5rem] cursor-pointer"
              onClick={(e) => {
                console.log("X closed");
                setFoodName("");
                setFoodPrice(0);
                setFoodImage("");
                setUpdateFoodItem(null);
                setIsOpenModal(false);
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="w-full flex flex-col items-center text-center margin-auto"
            >
              <span className="form-title relative block mt-10 text-[1.8rem] font-[600] text-[#ea7c69] after:block after:content-[' '] after:absolute after:top-[3rem] after:left-[30%] after:w-[40%] after:h-[4px] after:bg-[#ea7c69]">
                {updateFoodItem ? "Update Dish" : "Add Dish"}
              </span>
              <input
                type="text"
                value={foodName}
                placeholder="Food name"
                className="mt-8 w-full rounded-md px-4 py-2 outline-none border-[1px] border-[#393C49]"
                {...register("name", {
                  required: "Food name is required",
                  onChange: (e) => {
                    setValue("name", e.target.value);
                    setFoodName(e.target.value);
                  },
                })}
              />
              <input
                type="text"
                step="0.01"
                value={foodPrice}
                placeholder="Food price"
                className="mt-4 w-full rounded-md px-4 py-2 outline-none border-[1px] border-[#393C49]"
                {...register("price", {
                  required: "Food price must be number",
                  onChange: (e) => {
                    setValue("price", e.target.value);
                    setFoodPrice(e.target.value);
                  },
                })}
              />
              <input
                type="text"
                value={foodImage}
                placeholder="Food Image"
                className="mt-4 w-full rounded-md px-4 py-2 outline-none border-[1px] border-[#393C49]"
                {...register("image", {
                  required: true,
                  onChange: (e) => {
                    setValue("image", e.target.value);
                    setFoodImage(e.target.value);
                  },
                })}
              />
              {validImage ? (
                <img
                  src={foodImage}
                  ref={ref}
                  className="mt-8 h-[25vh] object-cover object-center"
                />
              ) : (
                <p className="text-[red] mt-4 font-[600]">{imageError}</p>
              )}
              <button
                type="submit"
                className="mt-4 btn--active w-[60%] shadow-xl !hover:bg-black !text-[1.1rem]"
              >
                {updateFoodItem ? "Update" : "Add"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Settings;
