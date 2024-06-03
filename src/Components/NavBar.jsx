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
        className={`hidden md:flex justify-between items-center bg-opacity-50 backdrop-blur-md bg-slate-200 fixed w-full transition-all duration-500 ease-in-out ${
          isNavbarVisible ? "top-0" : "-top-[100px]"
        } z-50`}
      >
        <div className="p-5 pl-20">
          <HashLink to="#home" smooth>
            <img src={logo} className="w-20 h-20" />
          </HashLink>
        </div>

        <div className="flex gap-10 pr-20 text-lg font-bold">
          <div className="hover:opacity-50 transition duration-300 p-4 rounded-xl">
            <HashLink to="#about" smooth>
              About
            </HashLink>
          </div>
          <div className="hover:opacity-50 transition duration-300 p-4 rounded-xl">
            <HashLink to="#skills" smooth>
              Skills
            </HashLink>
          </div>
          <div className="hover:opacity-50 transition duration-300 p-4 rounded-xl">
            <HashLink to="#experiences" smooth>
              Experiences
            </HashLink>
          </div>
          <div className="hover:opacity-50 transition duration-300 p-4 rounded-xl">
            <HashLink to="#projects" smooth>
              Projects
            </HashLink>
          </div>
          <div className="hover:opacity-50 transition duration-300 p-4 rounded-xl">
            <HashLink to="#contact" smooth>
              Contact
            </HashLink>
          </div>
        </div>
      </nav>

      <div
        className={`md:hidden flex justify-between items-center bg-slate-200 bg-opacity-50 backdrop-blur-md fixed w-full transition-all duration-500 ease-in-out ${
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
            className=" pr-10 hover:opacity-50"
            style={{ cursor: "pointer" }}
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
              <HashLink to="#about" smooth>
                About
              </HashLink>
            </li>
            <li>
              <HashLink to="#skills" smooth>
                Skills
              </HashLink>
            </li>
            <li>
              <HashLink to="#experiences" smooth>
                Experiences
              </HashLink>
            </li>
            <li>
              <HashLink to="#projects" smooth>
                Projects
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
