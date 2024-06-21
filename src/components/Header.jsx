import titleList from "../data.json";
function Header({ children, style = {} }) {
  const date = new Date();
  return (
    <div
      className="flex justify-between items-center flex-wrap gap-[1.5rem]"
      style={style}
    >
      <div>
        <span className="text-lg text-white">
          {titleList.title[window.location.pathname]}
        </span>
        <span className="mt-[0.5rem] font-[400] text-[1rem] text-white">
          {date.toDateString()}
        </span>
      </div>
      {children}
    </div>
  );
}

export default Header;
