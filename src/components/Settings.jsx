import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import {
  ShopOutlined,
  UnlockOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

import Nav from "@/components/Nav";

import filterIcon from "../assets/icons/filter.png";

function Settings() {
  const ref = useRef();

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

  // Settings content Nav states
  const [navLinks, setNavLinks] = useState([
    {
      selected: false,
      value: "Hot Dishes",
    },
    {
      selected: false,
      value: "Cold Dishes",
    },
    {
      selected: false,
      value: "Soup",
    },
    {
      selected: false,
      value: "Grill",
    },
    {
      selected: false,
      value: "Appetizer",
    },
    {
      selected: false,
      to: "#",
      value: "Dessert",
    },
  ]);

  // Foods state
  const [foodList, setfoodList] = useState([]);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [foodName, setFoodName] = useState("");
  const [foodPrice, setFoodPrice] = useState(0);
  const [foodImage, setFoodImage] = useState("");
  const [validImage, setValidImage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handling Bar states
  const handleLinkClick = (ind) => {
    // console.log(linksSettings, ind);

    setLinksSettings(
      linksSettings.map((item, id) => ({
        ...item,
        selected: !item.selected && ind === id,
      }))
    );
  };

  // Handling Nav states
  const handleNavLinkClick = (ind) => {
    setNavLinks(
      navLinks.map((item, id) => ({
        ...item,
        selected: id === ind,
      }))
    );
  };

  const validateImageUrl = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => reject(new Error("Invalid image URL"));
      img.src = url;
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(foodName);
    console.log(foodPrice);
    console.log(foodImage);
    setfoodList((prevFoodList) => {
      const newFoodList = [
        ...prevFoodList,
        {
          id: uuidv4(),
          image: foodImage,
          name: foodName,
          price: String(foodPrice),
          available: "20 Bowls available",
          quantity: 0,
          note: "",
        },
      ];
      setFoodName("");
      setFoodPrice("");
      setFoodImage("");

      try {
        const res = axios.put("http://localhost:3000/foods", {
          "hot-dishes": newFoodList,
        });
        console.log("Data come:", res.data);
      } catch (err) {
        alert(err.message);
      } finally {
        setIsOpenModal(false);
        return newFoodList;
      }
    });
  };

  useEffect(() => {
    (async function () {
      const res = await axios.get("http://localhost:3000/foods");
      setfoodList(res.data["hot-dishes"]);
    })();
  }, []);

  useEffect(() => {
    const handleValidate = async () => {
      try {
        console.log(foodList);
        await validateImageUrl(foodImage);
        setValidImage(true);
        setErrorMessage("");
      } catch (error) {
        setValidImage(false);
        setErrorMessage(error.message);
      }
    };
    handleValidate();
  }, [foodImage]);

  return (
    <>
      <div className="mt-8 h-[86vh] w-[100%] flex justify-between gap-4 text-white">
        {/* settings bar */}
        <div className="settings__bar rounded-md w-[22%] bg-[#1f1d2b]">
          {linksSettings.map((item, ind) => (
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
              {/* settings content navbar  */}
              <div className={clsx("mt-[1.2rem] flex gap-8 flex-wrap")}>
                {navLinks.map((item, index) => (
                  <div
                    key={index}
                    to={item.to || "#"}
                    className={clsx(
                      "relative font-[600] text-[0.875rem] text-[white] duration-400 cursor-pointer",
                      "after:block after:content-[' '] after:absolute after:bottom-[-1rem] after:w-[0] after:h-[3px] after:bg-[#ea7c69]",
                      "hover:text-[#ea7c69] hover:after:w-[70%]",
                      item.selected && "!text-[#ea7c69] after:w-[70%]"
                    )}
                    onClick={() => handleNavLinkClick(index)}
                  >
                    {item.value}
                  </div>
                ))}
              </div>
              <hr />

              {/* Food cards */}
              {navLinks[0].selected && (
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
                    {foodList.map((item) => (
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
              )}
            </>
          )}
        </div>
      </div>

      {isOpenModal && (
        <div
          className="modal-overlay fixed top-0 left-0 w-[100%] h-[100vh] !bg-[rgba(0,0,0,0.5)] !z-10"
          onClick={() => {
            console.log("Overlay closed");
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
                setIsOpenModal(false);
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
            <form className="w-full flex flex-col items-center text-center margin-auto">
              <span className="form-title relative block mt-10 text-[1.8rem] font-[600] text-[#ea7c69] after:block after:content-[' '] after:absolute after:top-[3rem] after:left-[30%] after:w-[40%] after:h-[4px] after:bg-[#ea7c69]">
                Add Dish
              </span>
              <input
                type="text"
                name="foodName"
                value={foodName}
                placeholder="Food name"
                className="mt-8 w-full rounded-md px-4 py-2 outline-none border-[1px] border-[#393C49]"
                onChange={(e) => setFoodName(e.target.value)}
              />
              <input
                type="number"
                step="0.01"
                name="foodPrice"
                value={foodPrice}
                placeholder="Food price"
                className="mt-4 w-full rounded-md px-4 py-2 outline-none border-[1px] border-[#393C49]"
                onChange={(e) => setFoodPrice(e.target.value)}
              />
              <input
                type="text"
                name="foodImage"
                value={foodImage}
                placeholder="Food Image"
                className="mt-4 w-full rounded-md px-4 py-2 outline-none border-[1px] border-[#393C49]"
                onChange={(e) => setFoodImage(e.target.value)}
              />
              {validImage ? (
                <img
                  src={foodImage}
                  ref={ref}
                  className="mt-8 h-[25vh] object-cover object-center"
                />
              ) : (
                <p className="text-[red] mt-4 font-[600]">{errorMessage}</p>
              )}
              <button
                type="submit"
                className="mt-4 btn--active w-[60%] shadow-xl !hover:bg-black !text-[1.1rem]"
                onClick={(e) => handleFormSubmit(e)}
              >
                Add
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Settings;
