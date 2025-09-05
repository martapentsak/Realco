import { useState } from "react";

import { CiSearch } from "react-icons/ci";
import { MdShoppingBag } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const navElements = [
  {
    value: "Home",
  },
  {
    value: "Properties",
    options: ["option1", "option2", "option3", "option4"],
  },
  {
    value: "About",
  },
  {
    value: "Contact",
  },
  {
    value: "Search",
    icon: <CiSearch />,
  },
];

const btns = [
  {
    value: "Cart",
    variant: "secondary",
    icon: <MdShoppingBag fontSize="18px" />,
  },
  {
    value: "Find a property",
    variant: "primary",
  },
];
export const Menu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <div className="menu">
      <div className="menu__wrapper">
        <a href="/">
          <img src="https://cdn.prod.website-files.com/6273e45912905c85aba8dc75/6277ce5ed64756e723578212_Brand.svg" />
        </a>
        <div className="menu__content">
          <nav
            className={`menu__nav ${isMobileMenuOpen ? "menu__nav--open" : ""}`}
          >
            {navElements.map(({ value, icon, options }) =>
              options ? (
                <div
                  key={value}
                  className="menu__item"
                  onClick={toggleDropdown}
                >
                  <span>{value}</span>
                  <FaChevronDown
                    className={`menu__arrow ${
                      isDropdownOpen ? "menu__arrow--open" : ""
                    }`}
                  />
                  {isDropdownOpen && (
                    <div className="menu__dropdown">
                      {options.map((opt) => (
                        <a key={opt} href="#" className="menu__dropdown-link">
                          {opt}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a className="menu__item">
                  {icon}
                  {value}
                </a>
              )
            )}
          </nav>
          <div className="menu__btns-section">
            {btns.map(({ variant, value, icon }) => (
              <button key={value} className={`btn-${variant}`}>
                {icon && <i className="btn-icon">{icon}</i>}
                {value}
              </button>
            ))}
          </div>
          <button className="menu__burger" onClick={toggleMobileMenu}>
            <RxHamburgerMenu />
          </button>
        </div>
      </div>
    </div>
  );
};

