import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";
import LinkItem from "./components/LinkItem";

import cn from "./style.module.scss";

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
    value: "Dessert",
  },
];

function Links({ links = linkLists }) {
  return (
    <div className={clsx("mt-[2rem]", "flex", "gap-8", "flex-wrap")}>
      {links.map((item) => (
        <LinkItem key={uuidv4()} to={item.to}>
          {item.value}
        </LinkItem>
      ))}
    </div>
  );
}

export default Links;
