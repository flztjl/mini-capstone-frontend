import { useState } from "react";

export const SearchBar = (props) => {
  const [searchFilter, setSearchFilter] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Inside the SearchBar component
  const updateSearchSuggestions = (searchTerm) => {
    if (searchTerm.length > 0) {
      const searchResults = props.products
        .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice(0, 5); // Take the top 5 results
      setSuggestions(searchResults);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={searchFilter}
        onChange={(event) => {
          const searchTerm = event.target.value;
          setSearchFilter(searchTerm);
          updateSearchSuggestions(searchTerm);
        }}
        className="shadow border rounded py-2 px-3 text-gray-700"
        id="search"
      />
      {searchFilter && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded shadow-md mt-1">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => setSearchFilter(suggestion.name)}
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
