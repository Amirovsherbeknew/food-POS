import { useState } from "react";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

function Layout({ children }) {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="layout relative flex items-start">
      <Sidebar />
      <div className="w-full min-h-[100vh] h-fit bg-[#252836] p-[1.2rem_3rem_1.2rem_7rem]">
        <Header>
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
