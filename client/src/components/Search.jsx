const Search = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSearch}>
        <div className="flex">
          <input
            type="text"
            name="pName"
            onChange={props.handleSearchInputChange}
            // value={props.searchTerm.pName}
            placeholder="Search"
            className="p-2 outline-none"
          />
          <input
            type="submit"
            value="Search"
            className="text-white bg-orange-400 py-1 px-3 rounded-r-md"
          />
        </div>
      </form>
    </div>
  );
};
export default Search;
