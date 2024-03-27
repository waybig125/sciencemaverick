"use client";

import { ThemeToggler } from "./ThemeToggler";

const Navbar = () => {
  return (
    <>
      <nav
        className={`absolute right-0 z-[3] top-0 p-[20px] flex flex-row w-full h-[100px] justify-center gap-5 space-between items-center`}
      >
        <ul className="flex flex-row justify-center space-between items-center gap-10">
          <li>Item1</li>
          <li>Item2</li>
          <li>Item3</li>
          <li>Item4</li>
        </ul>
        <ThemeToggler />
      </nav>
    </>
  );
};
export default Navbar;
