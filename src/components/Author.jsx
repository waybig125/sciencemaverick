"use client";

import Image from "next/image";

const Author = () => {
  return (
    <>
      <div
        className={`flex author-box flex-row h-[100vh] bg-black rounded-md m-[50px]`}
      >
        <div className={`p-[50px] flex-1`}>
          <h2 className="font-medium text-3xl text-white">About the Author</h2>
          <p className="text-gray-700">
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
            width="300"
            height="300"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </>
  );
};
export default Author;
