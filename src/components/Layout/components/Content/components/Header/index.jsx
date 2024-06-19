import clsx from "clsx";

import cn from "./Header.module.scss";

function Header({ title, date }) {
  return (
    <div>
      <h1>{title}</h1>
      {date && <span>{date}</span>}
    </div>
  );
}

export default Header;
