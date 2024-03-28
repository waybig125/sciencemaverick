import Author from "@/components/Author";
import Post from "@/components/Post";
import Hero from "@/components/Hero";
import Posts_Carousel from "@/components/PostsCarousel";
import { MaskContainer } from "@/components/ui/svg-masked-effect-custom";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="p-[20px] block bg-black dark:bg-[url('/bgs/aurora-dark2.svg')] bg-[url('/bgs/aurora-light.svg')] bg-cover bg-no-repeat bg-center bg-fixed w-[100vw] h-[100vh]">
        <MaskContainer
          revealText={
            <p className="max-w-4xl mx-auto text-slate-700 nunito-font dark:text-gray-300 text-center text-4xl font-bold">
              SCIENCE IS AMAZING!
            </p>
          }
          className="h-[40rem]"
        >
          SCIENCE IS <span className="text-slate-700">MAGIC!</span>
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
      <div className="w-[100vw] h-[300vh] bg-white dark:bg-black">
        <div className="flex flex-row px-[30px] w-[100vw] h-[100vh]">
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

        <div className="bg-white dark:bg-black">
          <Author />
        </div>
        <div className="bg-white dark:bg-black">
          <Posts_Carousel />
        </div>
      </div>
    </>
  );
};
export default Home;
