"use client";

import Author from "@/components/Author";
import Post from "@/components/Post";
import Image from "next/image";
import Typed from "react-typed";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className="aurora-bg1 absolute top-0 left-0 dark:hidden block z-[-2] w-[100vw] h-[100vh]">
        <img src={`bgs/aurora-light.svg`} />
      </div>
      <div className="aurora-bg2 absolute top-0 left-0 dark:block hidden z-[-2] w-[100vw] h-[100vh]">
        <img src={`bgs/aurora-dark3.svg`} />
      </div>
      <div>
        <div className="h-[100vh] block z-[-1] bg-transparent w-[100vw]"></div>
        <div
          className={`flex h-[100vh] w-[100vw] z-[-1] fixed top-0 left-0 flex-row justify-center items-center text-center`}
        >
          <div className={`w-[50%] z-[-1] text-left p-[20px] hidden md:block`}>
            <h1 className={`md:text-6xl text-2xl font-bold`}>
              THIS IS MY <br />
              BLOG HEADLINE
            </h1>
            <p className="text-primary">This is my science blog</p>
          </div>
          <div className={`w-[50%] z-[-1] text-right hidden md:block`}>
            <Image
              src={`illustrations/6.svg`}
              style={{ width: "70%", height: "auto" }}
              width="700"
              height="1000"
            />
          </div>
          <div className="block md:hidden">
            <h1 className={`text-2xl font-bold`}>THIS IS MY BLOG HEADLINE</h1>
            <p className="text-primary">This is my science blog</p>
          </div>
        </div>
      </div>

      <div className="bg-white z-[1]">
        <div className="h-[100vh] w-full">
          <div class="custom-shape-divider-top-1711362281">
            {/* <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                class="shape-fill fill-gray-800 dark:fill-white-100"
              ></path>
            </svg> */}
          </div>
          <div className="overflow-hidden p-[100px] bg-white-100 dark:bg-black dark:text-white-100 w-[100vw] h-[100vh]">
            <div
              className="slide-in-out whitespace-nowrap font-bold text-[200px] w-[100vw] h-[100vh]"
              style={{
                animationDuration: "8s",
                animationIterationCount: "infinite",
              }}
            >
              GET THE LATEST SCIENCE NEWS!
            </div>
          </div>
        </div>

        <div className="flex flex-row px-[10px] w-[100vw]">
          <div className={`block w-[66%] px-[30px]`}>
            <div className="flex w-[100%] rounded-md h-[40%] bg-black m-[20px]">
              {/* Image */}
            </div>
            <div className="flex w-[100%] rounded-md h-[20%] bg-blue-100 m-[20px]">
              {/* Image */}
            </div>
          </div>
          <div className={`flex w-[33%] text-right items-right flex-column`}>
            <ul className={`text-right`}>
              <li>Post1</li>
              <li>Post2</li>
              <li>Post3</li>
              <li>Post4</li>
              <li>Post5</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row px-[30px]">
          <Post
            title="Dummy Post1"
            excerpt="Some dummy excerpt"
            date={new Date()}
          />
          <Post
            title="Dummy Post2"
            excerpt="Some dummy excerpt"
            date={new Date()}
          />
          <Post
            title="Dummy Post3"
            excerpt="Some dummy excerpt"
            date={new Date()}
          />
        </div>

        <div>
          <Author />
        </div>
        <div className={`mx-[20px]`}>
          <Slider {...settings}>
            <Post
              title="Dummy Post4"
              excerpt="Some dummy excerpt"
              date={new Date()}
            />
            <Post
              title="Dummy Post5"
              excerpt="Some dummy excerpt"
              date={new Date()}
            />
            <Post
              title="Dummy Post6"
              excerpt="Some dummy excerpt"
              date={new Date()}
            />
            <Post
              title="Dummy Post7"
              excerpt="Some dummy excerpt"
              date={new Date()}
            />
          </Slider>
        </div>
      </div>
    </>
  );
};
export default Home;
