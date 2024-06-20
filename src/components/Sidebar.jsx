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

const sidebarItems = [
  { element: <i className="fa-solid fa-shop"></i> },
  { element: <i className="fa-solid fa-house"></i> },
  { element: <i className="fa-solid fa-percent"></i> },
  { element: <i className="fa-solid fa-chart-pie"></i> },
  { element: <i className="fa-solid fa-envelope"></i> },
  { element: <i className="fa-solid fa-bell"></i> },
  { element: <i className="fa-solid fa-gear"></i> },
  { element: <i className="fa-solid fa-right-from-bracket"></i> },
];

// function Sidebar() {
//   return (
//     <div className="sidebar fixed top-0 left-0 bg-[#1f1d2b] min-h-[100vh] h-[100vh] w-[5rem] flex flex-col justify-around  items-center rounded-r-[8px] z-[1] overflow-hidden">
//       <div className="sidebar__item-wrapper">
//         <div className="sidebar__item bg-[#a45353] sidebar__item--first">
//          <div className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-orange-400 to-red-400">
//            <i className="fa-solid fa-shop"></i>
//          </div>
//         </div>
//       </div>
//       <div className="sidebar__item-wrapper">
//         <div className="sidebar__item">
//           <i className="fa-solid fa-house"></i>
//         </div>
//       </div>
//       <div className="sidebar__item-wrapper">
//         <div className="sidebar__item">
//           <i className="fa-solid fa-percent"></i>
//         </div>
//       </div>
//       <div className="sidebar__item-wrapper">
//         <div className="sidebar__item">
//           <i className="fa-solid fa-chart-pie"></i>
//         </div>
//       </div>
//       <div className="sidebar__item-wrapper">
//         <div className="sidebar__item">
//           <i className="fa-solid fa-envelope"></i>
//         </div>
//       </div>
//       <div className="sidebar__item-wrapper">
//         <div className="sidebar__item">
//           <i className="fa-solid fa-bell"></i>{" "}
//         </div>
//       </div>
//       <div className="sidebar__item-wrapper">
//         <div className="sidebar__item">
//           <i className="fa-solid fa-gear"></i>
//         </div>
//       </div>
//       <div className="sidebar__item-wrapper">
//         <div className="sidebar__item">
//           <i className="fa-solid fa-right-from-bracket"></i>
//         </div>
//       </div>
//     </div>
//   );
// }

function Sidebar() {
  return (
    <div className="sidebar fixed top-0 left-0 bg-[#1f1d2b] h-[100vh] w-[5rem] flex flex-col justify-around items-center rounded-r-[8px] z-[1]">
      {sidebarItems.map((item, ind) => (
        <div
          key={ind}
          className={clsx(
            "sidebar__item-wrapper block relative rounded-l-[8px] bg-inherit p-[0.75rem] cursor-pointer",
            "before:none before:absolute before:content-[''] before:top-[-1.25rem] before:right-0 before:w-[1.25rem] before:h-[1.25rem] before:rounded-br-[10px] before:bg-transparent ",
            "after:none after:absolute after:content-[''] after:bottom-[-1.25rem] after:right-0 after:w-[1.25rem] after:h-[1.25rem] after:rounded-tr-[10px] after:bg-transparent",
            "hover:bg-[#252836] hover:translate-x-[4%] hover:before:shadow-custom-before hover:after:shadow-custom-after hover:*:text-white"
          )}
        >
          {ind ? (
            <div className="sidebar__item relative rounded-[8px] h-[3.2rem] w-[3.2rem] flex justify-center items-center text-[1.7rem] text-[#ea7c69] cursor-pointer duration-400">
              {item.element}
            </div>
          ) : (
            <div className="sidebar__item relative rounded-[8px] h-[3.2rem] w-[3.2rem] flex justify-center items-center text-[1.7rem] text-[#ea7c69] cursor-pointer duration-400 bg-[#a45353] sidebar__item--first">
              <div className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-orange-400 to-red-400">
                <i className="fa-solid fa-shop"></i>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
