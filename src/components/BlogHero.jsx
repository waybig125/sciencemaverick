"use client";
import { Typed } from "react-typed";
import { useEffect } from "react";
import { Meteors } from "./meteors";
const BlogHero = () => {
  useEffect(() => {
    const typed = new Typed(".typed-content", {
      strings: [
        "Imagination > Knowledge",
        "Physics = Chemistry",
        "Science = Magic",
        "AI < Human Intelligence",
        "Black Holes > Neutron Stars",
      ],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="overflow-hidden">
      <Meteors number={40} className={`absolute z-[1]`} />
      <div className="flex justify-center pb-[120px] md:pb-[60px] items-center align-center text-center h-[100vh] w-[100vw] p-[5px] bg-gradient-to-b from-gray-100 to-slate-700 dark:from-black dark:to-slate-700">
        <div
          className={`line-clamp-1 typed-content text-2xl smd:text-3xl md:text-3xl xmd:text-3xl lg:text-4xl font-bold nunito-font text-center`}
        ></div>
      </div>
    </div>
  );
};
export default BlogHero;
