function Header({ title, children, style = {} }) {
  const date = new Date();

  return (
    <div
      className="flex justify-between items-center flex-wrap gap-[1.5rem]"
      style={style}
    >
      <div>
        <span className="text-lg">{title}</span>
        <span className="mt-[0.5rem] font-[400] text-[1rem]">
          {date.toDateString()}
        </span>
      </div>
      {children}
    </div>
  );
}

export default Header;
