import clsx from "clsx";
import { Link } from "react-router-dom";

import cn from "../style.module.scss";

function LinkItem({ to = "#", children }) {
  return (
    <Link
      to={to}
      className={clsx(
        "relative",
        "duration-400",
        "hover:text-[#ea7c69]",
        "after:block",
        "after:content-['']",
        "after:absolute",
        "after:bottom-[-1rem]",
        "after:w-full",
        "hover:after:h-[2px]",
        "hover:after:bg-[#ea7c69]"
      )}
    >
      {children}
    </Link>
  );
}

export default LinkItem;
