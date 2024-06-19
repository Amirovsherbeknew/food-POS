import clsx from "clsx";

// store
// <i className="fa-solid fa-shop"></i>
// home
// <i className="fa-solid fa-house"></i>
// discount
// <i className="fa-solid fa-percent"></i>
// dashboard
// <i className="fa-solid fa-chart-pie"></i>
// message
// <i className="fa-solid fa-envelope"></i>
// notification
// <i className="fa-solid fa-bell"></i>
// settings
// <i className="fa-solid fa-gear"></i>
// logout
// <i className="fa-solid fa-right-from-bracket"></i>

function Sidebar() {
  return (
    <div className="sidebar absolute bg-[#1f1d2b] h-[100vh] w-[5rem] flex flex-col justify-around  items-center rounded-r-[8px] z-[1]">
      <div className="sidebar__item-wrapper">
        <div className="sidebar__item bg-[#a45353] sidebar__item--first">
          <div className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-orange-400 to-red-400">
            <i className="fa-solid fa-shop"></i>
          </div>
        </div>
      </div>
      <div className="sidebar__item-wrapper">
        <div className="sidebar__item">
          <i className="fa-solid fa-shop"></i>
        </div>
      </div>
      <div className="sidebar__item-wrapper">
        <div className="sidebar__item">
          <i className="fa-solid fa-shop"></i>
        </div>
      </div>
      <div className="sidebar__item-wrapper">
        <div className="sidebar__item">
          <i className="fa-solid fa-shop"></i>
        </div>
      </div>
      <div className="sidebar__item-wrapper">
        <div className="sidebar__item">
          <i className="fa-solid fa-shop"></i>
        </div>
      </div>
      <div className="sidebar__item-wrapper">
        <div className="sidebar__item">
          <i className="fa-solid fa-shop"></i>
        </div>
      </div>
      <div className="sidebar__item-wrapper">
        <div className="sidebar__item">
          <i className="fa-solid fa-shop"></i>
        </div>
      </div>
      <div className="sidebar__item-wrapper">
        <div className="sidebar__item">
          <i className="fa-solid fa-shop"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
