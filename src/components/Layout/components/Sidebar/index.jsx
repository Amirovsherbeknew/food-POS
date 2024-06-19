import clsx from "clsx";

import cn from "./Sidebar.module.scss";

// store
// <i class="fa-solid fa-shop"></i>
// home
// <i class="fa-solid fa-house"></i>
// discount
// <i class="fa-solid fa-percent"></i>

function Sidebar() {
  return (
    <div
      className={clsx(
        cn["sidebar"],
        "absolute",
        "bg-[#1f1d2b]",
        "h-[100vh]",
        "w-[5rem]",
        "flex",
        "justify-center",
        "items-center",
        "rounded-r-[8px]",
        "z-[1]"
      )}
    >
      <span className={clsx("block", "-rotate-90", "w-fit", "text-white")}>
        Sidebar
      </span>
    </div>
  );
}

export default Sidebar;
