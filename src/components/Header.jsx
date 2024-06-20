function Header({ title, date, children, style = {} }) {
  return (
    <div
      className="flex justify-between items-center flex-wrap gap-[1.5rem]"
      style={style}
    >
      <div>
        <span className="header__title">{title}</span>
        {date && <span className="header__date">{date}</span>}
      </div>
      {children}
    </div>
  );
}

export default Header;
