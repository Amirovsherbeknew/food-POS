import { Tabs } from "antd";
import clsx from "clsx";
import { Link } from "react-router-dom";

import "@/assets/styles/global.scss";

const linkLists = [
  {
    to: "hot-dishes",
    value: "Hot Dishes",
  },
  {
    to: "cold-dishes",
    value: "Cold Dishes",
  },
  {
    to: "soup",
    value: "Soup",
  },
  {
    to: "grill",
    value: "Grill",
  },
  {
    to: "appetizer",
    value: "Appetizer",
  },
  {
    to: "#",
    value: "Dessert",
  },
];

function Nav({ links = linkLists, className }) {
  const items = links.map((item, ind) => ({
    key: String(ind),
    label: (
      <Link to={"#"} className="!text-inherit">
        {item.value}
      </Link>
    ),
  }));

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <>
      {/* Home page Nav version using ant design tabs  */}
      <div className="tabs-wrapper">
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          tabBarStyle={{ color: "white !important", fontWeight: "500" }}
        />
      </div>

      {/* Home page Nav previous version */}
      {/* <div
        className={clsx("mt-[1.2rem] flex gap-8 flex-wrap", className || "")}
      >
        {links.map((item, index) => (
          <Link
            key={index}
            to={item.to || "#"}
            className={clsx(
              "relative font-[600] text-[0.875rem] text-[white] duration-400",
              "after:block after:content-[' '] after:absolute after:bottom-[-1rem] after:w-[0] after:h-[3px] after:bg-[#ea7c69]",
              "hover:text-[#ea7c69] hover:after:w-[70%]"
            )}
          >
            {item.value}
          </Link>
        ))}
      </div> */}
      <hr />
    </>
  );
}

export default Nav;
