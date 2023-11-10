import { Link, useNavigate } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
import { useState, useEffect } from "react";
import logoImage from "./assets/images/logo.png"; // Adjust the path if necessary

export const Header = ({ setSearchVisible }) => {
  // Define the handleMenuClick function
  // State to manage if the menu is open or not
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // New state for search bar visibility
  const navigate = useNavigate();

  const toggleSearch = () => {
    setSearchVisible(true);
    navigate("/products");
    setIsSearchOpen((prev) => !prev);
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
      <div className="nav-icon flex space-x-5 items-center">
        <Link to="#" onClick={toggleSearch} className="text-gray-700 hover:text-[#ee1c47] transition duration-300">
          <i className="bx bx-search text-3xl mr-5 hover:scale-110 transition-transform duration-300"></i>
        </Link>
        <Link to="/profile" className="text-gray-700 hover:text-[#ee1c47] transition duration-300">
          <i className="bx bx-user text-3xl mr-5 hover:scale-110 transition-transform duration-300"></i>
        </Link>
        <Link to="/cart" className="text-gray-700 hover:text-[#ee1c47] transition duration-300">
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
