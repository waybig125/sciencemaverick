"use server";
import Author from "@/components/Author";
import Post from "@/components/Post";
import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";
// import Posts_Carousel from "@/components/PostsCarousel";
import { MaskContainer } from "@/components/ui/svg-masked-effect-custom";
// import PostCard from "@/components/PostCard";
import {
  // getThreePosts,
  getTwelvePosts,
} from "../lib/cosmic";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Meteors } from "@/components/meteors";

const Home = async () => {
  // const threePosts = await getThreePosts();
  const twelvePosts = await getTwelvePosts();
  const threePosts = await twelvePosts.slice(3, 7);
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
      <div className="bg-white dark:bg-black m-0 mb-[-100px] pb-[100px]">
        <div className="p-[20px] hidden md:block bg-black dark:bg-[url('/bgs/aurora-dark3.svg')] bg-[url('/bgs/aurora-light.svg')] bg-cover bg-no-repeat bg-center bg-fixed w-[100vw] h-[100vh] text-6xl smd:text-6xl md:text-6xl xmd:text-6xl lg:text-8xl font-extrabold text-center">
          <MaskContainer
            revealText={
              <>
                <Meteors number={10} className={`absolute z-[1]`} />
                <p className="max-w-4xl mx-auto text-slate-700 dark:text-gray-300 text-cente">
                  NCSEIC SI RFUDELWNO!
                </p>
              </>
            }
            className="h-[40rem]"
          >
            <div
              className={`text-6xl smd:text-6xl md:text-6xl xmd:text-6xl lg:text-8xl font-extrabold tracking-tighter text-center`}
            >
              SCIENCE IS <span className="text-slate-700">WONDERFUL!</span>
            </div>
          </MaskContainer>
        </div>

        <div className="flex flex-row justify-center items-center algn-center px-[10px] w-[100vw] h-[100vh] bg-white dark:bg-black">
          <div
            className={`hidden smd:block basis-full xmd:basis-2/3 px-[30px]`}
          >
            <div className="hidden smd:block w-[100%] rounded-md bg-black dark:bg-white m-[20px]">
              <h2 className="text-4xl text-white dark:text-black lime-clamp-1 p-[5px] hidden xmd:block">
                Latest Posts
              </h2>
              {twelvePosts[0] &&
                twelvePosts[0].metadata &&
                twelvePosts[0].metadata.hero.imgix_url && (
                  <Link href={`/posts/${twelvePosts[0].slug}`}>
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        // width={2800}
                        // height={400}
                        fill
                        className="rounded-md"
                        src={`${twelvePosts[0] && twelvePosts[0].metadata && twelvePosts[0].metadata.hero.imgix_url}`}
                        priority
                        alt={twelvePosts[0].title}
                        placeholder="blur"
                        blurDataURL={`${twelvePosts[0] && twelvePosts[0].metadata && twelvePosts[0].metadata.hero.imgix_url}?auto=format,compress&q=1&blur=500&w=2`}
                      />
                    </AspectRatio>
                    <h2 className="text-md text-white dark:text-black lime-clamp-1 p-[5px]">
                      {twelvePosts[0].title}
                    </h2>
                  </Link>
                )}
            </div>
            {/* <div className="flex w-[100%] rounded-md h-[20%] bg-gray-300 m-[20px]"> */}
            {/* Image */}
            {/* </div> */}
          </div>

          <div
            className={`hidden xmd:flex mt-[30px] text-right items-right flex-column`}
          >
            <ul className={`text-right`}>
              {twelvePosts.slice(1, 3).map((post, idx) => {
                return (
                  <li
                    className="w-[100%] px-[10px] line-clamp-2 text-left"
                    key={post.id}
                  >
                    <Link href={`/posts/${post.slug}`}>
                      <div className="w-[50%] text-left">
                        <AspectRatio ratio={16 / 9}>
                          <Image
                            fill
                            className="mb-5 h-[400px] w-full rounded-lg bg-no-repeat object-cover object-center"
                            src={`${twelvePosts[0] && twelvePosts[0].metadata && post.metadata.hero.imgix_url}`}
                            priority
                            alt={post.title}
                            placeholder="blur"
                            blurDataURL={`${twelvePosts[0] && twelvePosts[0].metadata && post.metadata.hero.imgix_url}?auto=format,compress&q=1&blur=500&w=2`}
                          />
                        </AspectRatio>
                      </div>
                      <span className="w-[50%] block font-bold text-md nunito-font">
                        - {post.title}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* bg-[url('/bgs/aurora-dark2.svg')] dark:bg-[url('/bgs/aurora-light.svg')] bg-cover bg-no-repeat bg-center bg-fixed */}
        <div className="w-[100vw] min-h-[400vh] bg-white dark:bg-black my-0">
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
            <div className="">
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
                          className="sm:basis-full md:basis-1/2 xmd:basis-1/2 lg:basis-1/3"
                        >
                          <span className={``}>
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
