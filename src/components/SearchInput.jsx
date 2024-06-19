function SearchInput({ placeholder }) {
  return (
    <div className="search-input">
      <i className="fa-solid fa-magnifying-glass text-white"></i>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

export default SearchInput;
