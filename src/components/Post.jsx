"use client";
import Image from "next/image";
const Post = ({ title, featuredImage = "", excerpt, date }) => {
  return (
    <>
      <div className="w-[90%] lg:w-[80%] bg-white dark:bg-black text-black dark:text-white rounded-md m-[5%] lg:m-[30px] pb-[10px] border-solid border-2">
        <div className={`w-[50%] z-[-1] text-right block`}>
          <Image
            src={`illustrations/8.svg`}
            style={{ width: "70%", height: "auto" }}
            width="700"
            height="1000"
          />
        </div>
        {/* <div className="block md:hidden">
          <h1 className={`text-2xl font-bold`}>THIS IS MY BLOG HEADLINE</h1>
          <p className="text-primary">This is my science blog</p>
        </div> */}
        <div className="w-[100%] h-[300px] m-[0]"></div>
        <div className="pl-[20px]">
          <div className={`font-bold text-2xl`}>{title}</div>
          <div className="font-medium text-lg">{excerpt}</div>
          <span className="dark:text-gray-100 text-gray-700">
            {date.toString()}
          </span>
        </div>
      </div>
    </>
  );
};
export default Post;
