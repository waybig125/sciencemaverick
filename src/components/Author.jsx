"use client";
import Image from "next/image";

const Author = () => {
  return (
    <div className={`p-[20px] h-[100vh] flex justify-center items-center`}>
      <div
        className={`flex author-box flex-row h-[90%] w-[100%] bg-gray-300 dark:bg-black rounded-md m-[10px] md:m-[50px]`}
      >
        <div className={`md:p-[50px] p-[20px] lg:flex-1`}>
          <h2 className="font-extrabold tracking-tighter text-6xl text-black dark:text-white">
            About the Author
          </h2>
          <p className="text-gray-700 text-sm md:text-lg">
            {`Calling all science seekers! I'm Science Maverick, aka Muhammad
            Areeb. This blog isn't your average science show. We push
            boundaries, explore the wild side, and question everything. Buckle
            up and get ready for a mind-blowing adventure!`}
          </p>
        </div>
        <div className={``}>
          <Image
            src={`illustrations/3.svg`}
            className={`hidden mxl:block`}
            alt="Illustration"
            width="300"
            height="300"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};
export default Author;
