/* eslint-disable react/prop-types */
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import {
  AiOutlineProject,
  AiOutlineContacts,
  AiOutlineCode,
  AiOutlineHome,
} from "react-icons/ai";
import useThemeSwitcher from "../hooks/useThemeSwitcher";
import { motion } from "framer-motion";
import closeIcon from "../assets/close-icon.svg";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-orange" : ""
      } hover:text-orange transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-deep-blue text-white";
  const [mode, setMode] = useThemeSwitcher();

  // Animation variants
  const menuIconVariants = {
    open: { opacity: 0, rotate: 45 },
    close: { opacity: 1, rotate: 0 },
  };

  const mobileMenuVariants = {
    open: { right: 0 },
    closed: { right: "-100%" },
  };

  return (
    <nav className={`z-40 w-full fixed top-0 py-6 ${navbarBackground} `}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-5xl font-bold dark:text-white">AJ</h4>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold dark:text-white">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            {/* <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            /> */}
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "dark" ? (
                <BsFillSunFill className="cursor-pointer text-2xl hover:text-orange transition duration-500" />
              ) : (
                <BsFillMoonStarsFill className="cursor-pointer text-2xl hover:text-orange transition duration-500" />
              )}
            </button>
          </div>
        ) : (
          <motion.button
            className="rounded-full bg-orange p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            initial={false}
            animate={isMenuToggled ? "open" : "closed"}
            variants={menuIconVariants}
            transition={{ duration: 0.3 }}
          >
            <img alt="menu-icon" src="assets/menu-icon.svg" />
          </motion.button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <motion.div
            className="fixed right-0 bottom-0 h-full backdrop-blur-md bg-navbar rounded-sm w-[300px]"
            initial="closed"
            animate="open"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3 }}
          >
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <motion.button
                className="rounded-full bg-orange p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                animate={isMenuToggled ? "closed" : "open"}
                variants={menuIconVariants}
                transition={{ duration: 0.3 }}
              >
                <img alt="close-icon" src={closeIcon} />
              </motion.button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[30%] text-2xl text-black-text dark:text-white">
              <div className="flex items-center gap-3">
                <AiOutlineHome size={20} />
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className="flex items-center gap-3">
                <AiOutlineCode size={20} />
                <Link
                  page="Skills"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className="flex items-center gap-3">
                <AiOutlineProject size={20} />
                <Link
                  page="Projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              {/* <Link
    page="Testimonials"
    selectedPage={selectedPage}
    setSelectedPage={setSelectedPage}
  /> */}
              <div className="flex items-center gap-3">
                <AiOutlineContacts size={20} />
                <Link
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className="flex items-center"
              >
                {mode === "dark" ? (
                  <BsFillSunFill className="cursor-pointer text-2xl hover:text-orange transition duration-500" />
                ) : (
                  <BsFillMoonStarsFill className="cursor-pointer text-2xl hover:text-orange transition duration-500" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
