import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout({ title, setTitle, children }) {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="layout relative flex items-start">
      <Sidebar />
      <div className="w-full min-h-[100vh] h-fit bg-[#252836] p-[1.2rem_2.5rem_1.2rem_6.5rem]">
        <Header title={title}>
          <div className="search-input">
            <i className="fa-solid fa-magnifying-glass text-white"></i>
            <input
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              placeholder="Search for food, coffe, etc.."
            />
          </div>
        </Header>
        {children}
      </div>
    </div>
  );
}

export default Layout;
