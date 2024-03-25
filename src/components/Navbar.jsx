"use client";

import { ThemeToggler } from "./ThemeToggler";

const Navbar = () => {
  return (
    <>
      <nav className={`absolute right-0 z-[3] top-0`}>
        <ThemeToggler />
      </nav>
    </>
  );
};
export default Navbar;
