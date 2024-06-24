import jsonData from "@/data.json";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Header({ children, style = {} }) {
  const location = useLocation();
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
    <div
      className="flex justify-between items-center flex-wrap gap-[1.5rem]"
      style={style}
    >
      <div>
        <span className="text-lg text-white">{pageTitle}</span>
        {seenDate && (
          <span className="mt-[0.5rem] font-[400] text-[1rem] text-white">
            {date.toDateString()}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

export default Header;
