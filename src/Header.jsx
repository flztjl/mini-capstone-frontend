import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
import { useState } from "react";
import logoImage from "./assets/images/logo.png"; // Adjust the path if necessary

export const Header = ({ setSearchVisible }) => {
  // Define the handleMenuClick function
  // State to manage if the menu is open or not
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleSearch = () => {
    setSearchVisible((prev) => !prev);
    // setIsSearchOpen((prev) => !prev);
  };

  const handleMenuClick = () => {
    // Implement what should happen when the menu icon is clicked.
    // For example, you might toggle a mobile menu:
    setIsMenuOpen(!isMenuOpen);
  };

  // Determine the menu icon class based on the isMenuOpen state
  const menuIconClass = isMenuOpen ? "bx bx-menu-alt-right" : "bx bx-menu";

  return (
    <header className="fixed w-full top-0 right-0 z-50 flex items-center justify-between px-10 py-5 bg-white">
      <div className="logo">
        <img src={logoImage} className="w-[300px] h-auto -ml-12" alt="Logo" />
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
              <Link to="/inventory" className="text-gray-700 hover:text-gray-900 transition duration-300">
                Inventory
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <div className="nav-icon flex space-x-5 items-center">
        <Link
          to="#"
          onClick={toggleSearch}
          id="search-icon"
          className="text-gray-700 hover:text-[#ee1c47] transition duration-300"
        >
          <i className="bx bx-search text-3xl mr-5 hover:scale-110 transition-transform duration-300"></i>
        </Link>
        <div className="relative">
          <i
            className="bx bx-user text-3xl mr-5 hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          ></i>
          {showDropdown && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
              {localStorage.getItem("jwt") ? (
                <LogoutLink />
              ) : (
                <>
                  <Link to="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign Up
                  </Link>
                  <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Log In
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
        <Link to="/shoppingcart" className="text-gray-700 hover:text-[#ee1c47] transition duration-300">
          <i className="bx bx-cart text-3xl mr-5 hover:scale-110 transition-transform duration-300"></i>
        </Link>
        <div
          className={`${menuIconClass} text-3xl text-gray-700 cursor-pointer hover:scale-110 transition-transform duration-300`}
          id="menu-icon"
          onClick={handleMenuClick}
        ></div>
      </div>
    </header>
  );
};
