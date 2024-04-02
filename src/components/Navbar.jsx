"use client";
import { Menu, X } from "lucide-react";
import { ThemeToggler } from "./ThemeToggler";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { theme } = useTheme();
  // const [currentTheme, setTheme] = useState(theme);

  useEffect(() => {
    setShow(false);
  }, [theme]);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <header className={`overflow-hidden z-[999]`}>
      <p className="flex flex-row items-center justify-center gap-2 bg-black text-white uppercase font-bold text-center inset-0 py-[10px]">
        We stand with Palestine{" "}
        <Image
          src="../../../Palestine.svg"
          width="20"
          height="15"
          style={{ width: "20px", height: "auto" }}
        />
      </p>
      <nav
        className={`my-[25px] absolute right-0 z-[3] top-0 p-[20px] flex flex-row w-full h-[100px] md:justify-center gap-5 justify-between md:space-between items-center`}
      >
        <Link href={`/`}>
          <Image
            src="../../../logos/1.svg"
            alt="Science Maverick Logo"
            width="50"
            height="50"
            className="hidden dark:block"
          />
          <Image
            src="../../../logos/2.svg"
            alt="Science Maverick Logo"
            width="50"
            height="50"
            className="block dark:hidden"
          />
        </Link>
        <ul className="hidden md:flex flex-row justify-center space-between items-center gap-3 md:gap-10 text-xs md:text-lg">
          <li className="hover:text-slate-600 dark:hover:text-gray-600">
            <Link href={`/`}>Home</Link>
          </li>
          <li className="hover:text-slate-600 dark:hover:text-gray-600">
            <Link href={`/about`}>About</Link>
          </li>
          <li className="hover:text-slate-600 dark:hover:text-gray-600">
            <Link href={`/contact`}>Contact</Link>
          </li>
          {/* <li>Categories</li> */}
          <li className="hover:text-slate-600 dark:hover:text-gray-600">
            <Link href={`/posts`}>Posts</Link>
          </li>
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
              <li className="mb-[10px] text-white hover:text-slate-500">
                <Link href={`/`} onClick={() => setShow(!show)}>
                  Home
                </Link>
              </li>
              <li className="mb-[10px] text-white hover:text-slate-500">
                <Link href={`/about`} onClick={() => setShow(!show)}>
                  About
                </Link>
              </li>
              <li className="mb-[10px] text-white hover:text-slate-500">
                <Link href={`/contact`} onClick={() => setShow(!show)}>
                  Contact
                </Link>
              </li>
              {/* <li className="mb-[10px] text-white">Categories</li> */}
              <li className="mb-[10px] text-white hover:text-slate-500">
                <Link href={`/posts`} onClick={() => setShow(!show)}>
                  Posts
                </Link>
              </li>
              <li className="mb-[10px] text-white hover:text-slate-500">
                <Link href="/privacy-policy" onClick={() => setShow(!show)}>
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-[10px] text-white hover:text-slate-500">
                <Link href="/terms-of-service" onClick={() => setShow(!show)}>
                  Terms &amp; Conditions
                </Link>
              </li>
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
            className={`block md:hidden z-[100] absolute top-[33px] right-[30px] text-black dark:text-white`}
            onClick={() => setShow(!show)}
          />
        )}
      </nav>
    </header>
  );
};
export default Navbar;
