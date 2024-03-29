"use client";
import { Menu, X } from "lucide-react";
import { ThemeToggler } from "./ThemeToggler";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <header className={`overflow-hidden z-[999]`}>
      <p className="flex flex-row items-center justify-center gap-2 bg-black text-white uppercase font-bold text-center inset-0 py-[10px]">
        We stand with Palestine <img src="Palestine.svg" width="20" />
      </p>
      <nav
        className={`my-[25px] absolute right-0 z-[3] top-0 p-[20px] flex flex-row w-full h-[100px] md:justify-center gap-5 justify-between md:space-between items-center`}
      >
        <img
          src="logos/1.svg"
          alt="Science Maverick Logo"
          width="50"
          className="hidden dark:block"
        />
        <img
          src="logos/2.svg"
          alt="Science Maverick Logo"
          width="50"
          className="block dark:hidden"
        />
        <ul className="hidden md:flex flex-row justify-center space-between items-center gap-3 md:gap-10 text-xs md:text-lg">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Categories</li>
          <li>Posts</li>
          <ThemeToggler key={1} />
        </ul>
        <AnimatePresence>
          {show && (
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              className="block md:hidden p-[50px] pl-[100px] pt-[150px] bg-black w-[100vw] h-[100vh] fixed top-0 left-0"
            >
              <li className="mb-[10px] text-white">Home</li>
              <li className="mb-[10px] text-white">About</li>
              <li className="mb-[10px] text-white">Contact</li>
              <li className="mb-[10px] text-white">Categories</li>
              <li className="mb-[10px] text-white">Posts</li>
              <ThemeToggler key={2} />
              {show && (
                <X
                  size={24}
                  className={`block md:hidden z-[100] absolute top-[56px] right-[30px] text-white`}
                  onClick={() => setShow(!show)}
                />
              )}
            </motion.ul>
          )}
        </AnimatePresence>
        {!show && (
          <Menu
            size={24}
            className={`block md:hidden z-[100] absolute top-[33px] right-[30px] text-white`}
            onClick={() => setShow(!show)}
          />
        )}
      </nav>
    </header>
  );
};
export default Navbar;
