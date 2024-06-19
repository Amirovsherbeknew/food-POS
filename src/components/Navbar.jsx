import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";
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

function Navbar({ links = linkLists }) {
  return (
    <div className={clsx("mt-[1.2rem]", "flex", "gap-8", "flex-wrap")}>
      {links.map((item) => (
        <Link
          key={uuidv4()}
          to={item.to || "#"}
          className={clsx("link-item", item.selected && "link-item--selected")}
        >
          {item.value}
        </Link>
      ))}
    </div>
  );
}

export default Navbar;
