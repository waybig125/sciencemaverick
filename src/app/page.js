"use client";

import Image from "next/image";
import Typed from "react-typed";

const Home = () => {
  return (
    <>
      <div
        className={`flex h-[100vh] w-[100vw] flex-row justify-center items-center text-center`}
      >
        <div
          className={`bg-red-100 w-[50%] text-left p-[20px] hidden md:block`}
        >
          <h1 className={`md:text-6xl text-2xl font-bold`}>
            THIS IS MY <br />
            BLOG HEADLINE
          </h1>
          <p className="text-gray-800">This is my science blog</p>
        </div>
        <div className={`bg-yellow-100 w-[50%] text-right hidden md:block`}>
          <Image
            src={`illustrations/6.svg`}
            style={{ width: "70%", height: "auto" }}
            width="700"
            height="1000"
          />
        </div>
        <div className="block md:hidden">
          <h1 className={`text-2xl font-bold`}>THIS IS MY BLOG HEADLINE</h1>
          <p className="text-gray-800">This is my science blog</p>
        </div>
      </div>

      <div className="overflow-hidden p-[20px] bg-white-100 w-[100vw]">
        <div
          className="slide-in-out whitespace-nowrap font-bold text-2xl"
          style={{
            animationDuration: "8s",
            animationIterationCount: "infinite",
          }}
        >
          GET THE LATEST SCIENCE NEWS!
        </div>
      </div>
    </>
  );
};
export default Home;
