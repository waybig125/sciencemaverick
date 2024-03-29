import Author from "@/components/Author";
import Post from "@/components/Post";
import Hero from "@/components/Hero";
import Posts_Carousel from "@/components/PostsCarousel";
import { MaskContainer } from "@/components/ui/svg-masked-effect-custom";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "../lib/cosmic";

const Home = async () => {
  const posts = await getAllPosts();
  return (
    <>
      {/* <Hero /> */}

      <main className="mx-auto mt-4 w-full max-w-3xl flex-col space-y-16 px-4 lg:px-0">
        {!posts && "You must add at least one Post to your Bucket"}
        {posts &&
          posts.map((post) => {
            return (
              <div key={post.id}>
                <PostCard post={post} />
              </div>
            );
          })}
      </main>

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
          <div className="block lg:flex lg:flex-row px-[10px] lg:px-[30px] w-[100%] min-h-[100vh] my-[100px] md:my-0">
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
      </div>
    </>
  );
};
export default Home;
