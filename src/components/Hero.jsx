"use client";
import Image from "next/image";
import { Typed } from "react-typed";
import { useEffect } from "react";
import { GlobeDemo } from "./Globe";
const Hero = () => {
  useEffect(() => {
    const typed = new Typed(".element", {
      strings: ["First sentence.", "Second sentence."],
      typeSpeed: 100,
      backSpeed: 140,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="aurora-bg1 fixed top-0 left-0 dark:hidden block z-[-2] w-[100vw] h-[100vh]">
        <img src={`bgs/aurora-light.svg`} />
      </div>
      <div className="aurora-bg2 fixed top-0 left-0 dark:block hidden z-[-2] w-[100vw] h-[100vh]">
        <img src={`bgs/aurora-dark3.svg`} />
      </div>
      <div className={`overflow-x-hidden w-[100vw] m-0 pt-[100vh]`}>
        {/* <div className="h-[100vh] block z-[-9] bg-transparent w-[100vw]"></div> */}
        <div
          className={`flex h-[100vh] w-[100vw] z-[-1] absolute top-0 left-0 flex-row justify-center items-center text-center`}
        >
          <div
            className={`w-[50%] z-[-1] text-left pl-[120px] hidden md:block`}
          >
            <h1 className={`md:text-6xl text-2xl font-bold overflow-x-visible`}>
              THIS IS MY <br />
              <span
                className={`element overflow-x-visible text-gray-700 dark:text-gray-500`}
              >
                BLOG HEADLINE
              </span>
            </h1>
            <p className="text-primary">This is my science blog</p>
          </div>
          <div className={`w-[50%] z-[-1] text-right hidden md:block`}>
            {/* <Image
              src={`illustrations/6.svg`}
              style={{ width: "70%", height: "auto" }}
              width="700"
              height="1000"
            /> */}
            {/*  */}
            {/* Temporarily Commented out */}
            <GlobeDemo
              key={(656658328748937 + Math.random).toString()}
              className={`z-[1000] absolute`}
            />
            {/*  */}
          </div>
          <div className="block md:hidden">
            <h1 className={`text-2xl font-bold z-[5] dark:text-gray-100`}>
              THIS IS MY BLOG HEADLINE
            </h1>
            <p className="text-primary">This is my science blog</p>
            <Image
              src={`illustrations/astronaut.svg`}
              className={`absolute top-[25%] left-[15%] z-[-1] opacity-[0.5]`}
              style={{ width: "70%", height: "auto" }}
              width="700"
              height="1000"
            />
            {/* <div
              className={`absolute top-0 left-0 w-[100vw] h-[100vh] z-[-1] flex justify-center items-center`}
            >
              <div
                className={`flex w-[100%] h-[100vh] align-center items-center justify-center`}
              >
                <GlobeDemo key={(2172361784672386 + Math.random).toString()} />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="bg-white z-[1]">
        <div className="h-[100vh] w-[100vw]">
          {/* <div class="custom-shape-divider-top-1711362281">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill fill-gray-800 dark:fill-white-100"
              ></path>
            </svg>
          </div> */}
          <div className="flex justify-center items-center overflow-hidden p-[100px] bg-white-100 dark:bg-black dark:text-white-100 w-[100%] h-[100vh]">
            <div
              className="slide-in-out whitespace-nowrap font-bold text-[100px] md:text-[200px] w-[100%] h-[100vh]"
              style={{
                animationDuration: "8s",
                animationIterationCount: "infinite",
              }}
            >
              GET THE LATEST SCIENCE NEWS!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
