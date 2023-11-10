import { useState, useEffect } from "react";

export const SearchBar = ({ setSearchVisible, searchFilter, setSearchFilter, products }) => {
  const [suggestions, setSuggestions] = useState([]);

  // Inside the SearchBar component
  const updateSearchSuggestions = (searchTerm) => {
    if (searchTerm.length > 0) {
      const searchResults = products
        .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice(0, 5); // Take the top 5 results
      setSuggestions(searchResults);
    } else {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    // Function to handle key press events
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        // Call the function that closes the search bar here
        setSearchVisible(false);
      }
    };

    // Function to handle click events
    const handleClickOutside = (e) => {
      // Assuming your search bar has a unique ref or id
      if (!e.target.closest("#search-bar-container")) {
        // Call the function that closes the search bar here
        // setSearchVisible(false);
      }
    };

    // Add event listeners
    window.addEventListener("keydown", handleKeyPress);
    document.addEventListener("click", handleClickOutside);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" id="search-bar-container">
      <div className="w-full max-w-lg p-4 bg-white shadow-lg rounded" onClick={(e) => e.stopPropagation()}>
        <input
          type="text"
          value={searchFilter}
          onChange={(event) => {
            const searchTerm = event.target.value;
            setSearchFilter(searchTerm);
            updateSearchSuggestions(searchTerm);
          }}
          className="w-full shadow border rounded py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="search"
          placeholder="Search for products..."
          autoFocus
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
    </div>
  );
};
