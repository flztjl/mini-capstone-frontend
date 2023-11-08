import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
import { Image } from "./App";
import { useState } from "react";
import { SearchBar } from "./SearchBar";

export const Header = ({ searchFilter, setSearchFilter }) => {
  // Define the handleMenuClick function
  // State to manage if the menu is open or not
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // New state for search bar visibility

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleMenuClick = () => {
    // Implement what should happen when the menu icon is clicked.
    // For example, you might toggle a mobile menu:
    setIsMenuOpen(!isMenuOpen);
    console.log("Menu icon clicked");
  };

  // Determine the menu icon class based on the isMenuOpen state
  const menuIconClass = isMenuOpen ? "bx bx-menu-alt-right" : "bx bx-menu";

  return (
    <header className="fixed w-full top-0 right-0 z-50 flex items-center justify-between px-10 py-5 bg-white">
      <div className="logo">
        <Image imageName="logo.png" className="max-w-xs h-auto ml-[-50px]" alt="Logo" />
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-gray-700 hover:text-gray-900 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/bundles" className="text-gray-700 hover:text-gray-900 transition duration-300">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-gray-700 hover:text-gray-900 transition duration-300">
              Products
            </Link>
          </li>
          {localStorage.user_role === "admin" && (
            <li>
              <Link to="/products/new" className="text-gray-700 hover:text-gray-900 transition duration-300">
                Inventory
              </Link>
            </li>
          )}
          <li>
            {localStorage.jwt === undefined ? (
              <>
                <Link to="/signup" className="text-gray-700 hover:text-gray-900 transition duration-300 mr-4">
                  Signup
                </Link>
                <Link to="/login" className="text-gray-700 hover:text-gray-900 transition duration-300">
                  Login
                </Link>
              </>
            ) : (
              <LogoutLink />
            )}
          </li>
        </ul>
      </nav>
      <div className="nav-icon flex space-x-4">
        <Link to="#" onClick={toggleSearch} className="text-gray-700 hover:text-gray-900 transition duration-300">
          <i className="bx bx-search"></i>
        </Link>
        <Link to="/profile" className="text-gray-700 hover:text-gray-900 transition duration-300">
          <i className="bx bx-user"></i>
        </Link>
        <Link to="/cart" className="text-gray-700 hover:text-gray-900 transition duration-300">
          <i className="bx bx-cart"></i>
        </Link>
        <div className={menuIconClass} id="menu-icon" onClick={handleMenuClick}></div>
      </div>
      {isSearchOpen && <SearchBar searchFilter={searchFilter} setSearchFilter={setSearchFilter} />}
    </header>
  );
};
