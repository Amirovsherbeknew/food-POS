import jsonData from "@/data.json";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useProductStore from "../store/store";

function Header() {
  const location = useLocation();
  const selectText = useProductStore((state) => state.selectText);
  const handleSelectText = useProductStore((state) => state.handleSelectText);
  const [pageTitle, setPageTitle] = useState(jsonData.title[location.pathname]);
  const [seenDate, setSeenDate] = useState(
    jsonData.seenDate[location.pathname]
  );

  useEffect(() => {
    setPageTitle(jsonData.title[location.pathname]);
    setSeenDate(jsonData.seenDate[location.pathname]);
  }, [location]);

  const date = new Date();

  return (
    <div className="flex justify-between items-center flex-wrap gap-[1.5rem]">
      <div>
        <span className="text-lg text-white">{pageTitle}</span>
        {seenDate && (
          <span className="mt-[0.5rem] font-[400] text-[1rem] text-white">
            {date.toDateString()}
          </span>
        )}
      </div>
      {["/", "/settings"].includes(location.pathname) && (
        <div className="search-input">
          <i className="fa-solid fa-magnifying-glass text-white"></i>
          <input
            type="text"
            onChange={(e) => handleSelectText(e.target.value)}
            value={selectText}
            placeholder="Search for food, coffe, etc.."
          />
        </div>
      )}
    </div>
  );
}

export default Header;
