import { useState, useEffect, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/logo-low.png";
import { FiMenu } from "react-icons/fi";

export const NavBar = () => {
  const lastScrollTop = useRef(0);

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.scrollY;
      if (yOffset > lastScrollTop.current) {
        // downward scroll
        setIsNavbarVisible(false);
      } else if (yOffset < lastScrollTop.current) {
        // upward scroll
        setIsNavbarVisible(true);
      } // else was horizontal scroll
      lastScrollTop.current = yOffset <= 0 ? 0 : yOffset;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <nav
        className={`hidden md:flex justify-between opacity-80 items-center bg-slate-200 fixed w-full transition-all duration-500 ease-in-out ${
          isNavbarVisible ? "top-0" : "-top-[100px]"
        } z-50`}
      >
        <div className="p-5 pl-20">
          <HashLink to="#home" smooth>
            <img src={logo} className="w-20 h-20" />
          </HashLink>
        </div>

        <div className="flex gap-10 pr-20 text-lg font-bold">
          <div className="hover:text-blue-500 transition duration-300 hover:shadow-lg p-4 rounded-xl">
            <HashLink to="#about" smooth>
              About
            </HashLink>
          </div>
          <div className="hover:text-blue-500 transition duration-300 hover:shadow-lg p-4 rounded-xl">
            <HashLink to="#projects" smooth>
              Projects
            </HashLink>
          </div>
          <div className="hover:text-blue-500 transition duration-300 hover:shadow-lg p-4 rounded-xl">
            <HashLink to="#resume" smooth>
              Resume
            </HashLink>
          </div>
          <div className="hover:text-blue-500 transition duration-300 hover:shadow-lg p-4 rounded-xl">
            <HashLink to="#contact" smooth>
              Contact
            </HashLink>
          </div>
        </div>
      </nav>

      <div
        className={`md:hidden flex justify-between opacity-80 items-center bg-slate-200 fixed w-full transition-all duration-500 ease-in-out ${
          isNavbarVisible ? "top-0" : "-top-[85px]"
        } z-50`}
      >
        <div className="p-5">
          <HashLink to="#home" smooth>
            <img src={logo} className="w-14 h-14" />
          </HashLink>
        </div>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            className=" cursor-pointer pr-10 hover:text-blue-500"
          >
            <span>
              <FiMenu size={28} />
            </span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <HashLink to="#portfolio" smooth>
                Portfolio
              </HashLink>
            </li>
            <li>
              <HashLink to="#skills" smooth>
                Skills
              </HashLink>
            </li>
            <li>
              <HashLink to="#about" smooth>
                About
              </HashLink>
            </li>
            <li>
              <HashLink to="#contact" smooth>
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default NavBar;