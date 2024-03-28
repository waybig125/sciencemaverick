"use client";
import { ThemeToggler } from "./ThemeToggler";

const Navbar = () => {
  return (
    <header>
      <p className="bg-black text-white uppercase font-bold text-center inset-0 py-[10px]">
        We stand with Palestine &#x1F1F5;&#x1F1F8;
      </p>
      <nav
        className={`my-[15px] absolute right-0 z-[3] top-0 p-[20px] flex flex-row w-full h-[100px] justify-center gap-5 space-between items-center`}
      >
        <ul className="flex flex-row justify-center space-between items-center gap-3 md:gap-10 text-xs md:text-lg">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Categories</li>
          <li>Posts</li>
        </ul>
        <ThemeToggler />
      </nav>
    </header>
  );
};
export default Navbar;
