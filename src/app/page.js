"use server";
import Author from "@/components/Author";
import Post from "@/components/Post";
import Hero from "@/components/Hero";
// import Posts_Carousel from "@/components/PostsCarousel";
import { MaskContainer } from "@/components/ui/svg-masked-effect-custom";
// import PostCard from "@/components/PostCard";
import { getThreePosts, getTwelvePosts } from "../lib/cosmic";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = async () => {
  const threePosts = await getThreePosts();
  const twelvePosts = await getTwelvePosts();
  return (
    <>
      <Hero />
      {/* <div className="w-[100vw] min-h-[300vh] bg-white dark:bg-black my-0">
        <div className="block lg:flex lg:flex-row px-[10px] lg:px-[30px] w-[100%] min-h-[100vh] my-[100px] md:my-0">
          {!posts && "You must add at least one Post to your Bucket"}
          {posts &&
            posts.map((post) => {
              return (
                <span key={post.id}>
                  <PostCard post={post} />
                </span>
              );
            })}
        </div>
      </div> */}
      <div className="bg-white dark:bg-black">
        <div className="p-[20px] hidden md:block bg-black dark:bg-[url('/bgs/aurora-dark3.svg')] bg-[url('/bgs/aurora-light.svg')] bg-cover bg-no-repeat bg-center bg-fixed w-[100vw] h-[100vh]">
          <MaskContainer
            revealText={
              <p className="max-w-4xl mx-auto text-slate-700 nunito-font dark:text-gray-300 text-center text-2xl md:text-4xl font-bold">
                SCIENCE IS AMAZING!
              </p>
            }
            className="h-[40rem]"
          >
            SCIENCE IS <span className="text-slate-700">MAGICAL!</span>
          </MaskContainer>
        </div>

        <div className="flex flex-row px-[10px] w-[100vw] h-[100vh] bg-white dark:bg-black">
          <div className={`block w-[66%] px-[30px]`}>
            <div className="flex w-[100%] rounded-md h-[40%] bg-black dark:bg-white m-[20px]">
              {/* Image */}
            </div>
            <div className="flex w-[100%] rounded-md h-[20%] bg-gray-300 m-[20px]">
              {/* Image */}
            </div>
          </div>

          <div
            className={`flex w-[33%] mt-[30px] text-right items-right flex-column`}
          >
            <ul className={`text-right`}>
              <li>Post1</li>
              <li>Post2</li>
              <li>Post3</li>
              <li>Post4</li>
              <li>Post5</li>
            </ul>
          </div>
        </div>
        {/* bg-[url('/bgs/aurora-dark2.svg')] dark:bg-[url('/bgs/aurora-light.svg')] bg-cover bg-no-repeat bg-center bg-fixed */}
        <div className="w-[100vw] min-h-[300vh] bg-white dark:bg-black my-0">
          {/* <div className="block lg:flex lg:flex-row px-[10px] lg:px-[30px] w-[100%] min-h-[100vh] my-[100px] md:my-0"> */}
          <div className="p-[20px] smd:p-[100px] grid grid-cols-1 xmd:grid-cols-3 md:grid-cols-2 gap-5 w-[100%] min-h-[100vh] my-[100px] md:my-0">
            {!threePosts && "You must add at least one Post to your Bucket"}
            {threePosts &&
              threePosts.map((post) => {
                return (
                  <span key={post.id}>
                    <Post post={post} />
                  </span>
                );
              })}
          </div>
          {/* <div className="block lg:flex lg:flex-row px-[10px] lg:px-[30px] w-[100%] min-h-[100vh] my-[100px] md:my-0">
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
          </div> */}

          <div className="bg-white dark:bg-black">
            <Author />
          </div>
          <div className="bg-white dark:bg-black">
            {/* <Posts_Carousel posts={twelvePosts} /> */}
            <div className="md:flex justify-center items-center align-center md:w-full md:h-full">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="md:max-w-5xl smd:max-w-4xl m-[60px] smd:m-[170px] md:m-[100px]"
              >
                <CarouselContent>
                  {!twelvePosts &&
                    "You must add at least one Post to your Bucket"}
                  {twelvePosts &&
                    twelvePosts.map((post) => {
                      return (
                        <CarouselItem
                          key={post.id}
                          className="md:basis-1/2 lg:basis-1/3"
                        >
                          <span className={`smd:m-[30px]`}>
                            <Post post={post} carousel={true} />
                          </span>
                        </CarouselItem>
                      );
                    })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
