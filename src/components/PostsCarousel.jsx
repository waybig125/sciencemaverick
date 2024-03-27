"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PostsCarousel from "@/components/PostsCarousel";
import Post from "./Post";
const Posts_Carousel = () => {
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
      <div className={`m-[50px] bg-gray-300 dark:bg-white rounded-lg`}>
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
    </>
  );
};
export default Posts_Carousel;
