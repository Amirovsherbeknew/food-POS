import clsx from "clsx";
import { Link } from "react-router-dom";

const linkLists = [
  {
    selected: true,
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
    value: "Dessert",
  },
];

function Nav({ links = linkLists }) {
  return (
    <>
      <div className={clsx("mt-[1.2rem]", "flex", "gap-8", "flex-wrap")}>
        {links.map((item, index) => (
          <Link
            key={index}
            to={item.to || "#"}
            className={clsx(
              "relative font-[600] text-[0.875rem] duration-400",
              "after:block after:content-[' '] after:absolute after:bottom-[-1rem] after:w-[0] after:h-[3px] after:bg-[#ea7c69]",
              "hover:text-[#ea7c69] hover:after:w-[70%]"
            )}
          >
            {item.value}
          </Link>
        ))}
      </div>
      <hr />
    </>
  );
}

export default Nav;
