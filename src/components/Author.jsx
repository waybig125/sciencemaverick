"use client";
import Image from "next/image";

const Author = () => {
  return (
    <div className={`p-[20px] h-[100vh] flex justify-center items-center`}>
      <div
        className={`flex author-box flex-row h-[90%] w-[100%] bg-gray-300 dark:bg-black rounded-md m-[10px] md:m-[50px]`}
      >
        <div className={`md:p-[50px] p-[10px] lg:flex-1`}>
          <h2 className="font-medium text-3xl text-black dark:text-white">
            About the Author
          </h2>
          <p className="text-gray-700 text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            aliquid optio, consectetur facilis et temporibus enim vitae repellat
            accusamus adipisci, odit sed recusandae similique error placeat
            eligendi voluptatem dolor reiciendis? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Explicabo aliquid optio, consectetur
            facilis et temporibus enim vitae repellat accusamus adipisci, odit
            sed recusandae similique error placeat eligendi voluptatem dolor
            reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo aliquid optio, consectetur facilis et temporibus enim
            vitae repellat accusamus adipisci, odit sed recusandae similique
            error placeat eligendi voluptatem dolor reiciendis?
          </p>
        </div>
        <div className={``}>
          <Image
            src={`illustrations/3.svg`}
            className={`hidden mxl:block`}
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
