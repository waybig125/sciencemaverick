"use client";
const Post = ({ title, featuredImage = "", excerpt, date }) => {
  return (
    <>
      <div className="bg-black text-white rounded-md m-[30px] pb-[10px]">
        <div className="w-[100%] h-[300px] m-[0]"></div>
        <div className="pl-[20px]">
          <div className={`font-bold text-2xl`}>{title}</div>
          <div className="font-medium text-lg">{excerpt}</div>
          <span className="text-gray-100">{date.toString()}</span>
        </div>
      </div>
    </>
  );
};
export default Post;
