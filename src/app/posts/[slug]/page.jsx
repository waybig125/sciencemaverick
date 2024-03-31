import { Meteors } from "@/components/meteors";
import { getPost, getSimilarPosts } from "@/lib/cosmic";
import BlogPost from "@/components/BlogPost";
import Post from "@/components/Post";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
// app/posts/[slug]/page.jsx
export async function generateMetadata({ params }) {
  const post = await getPost(params);
  return {
    title: `${post.title}`,
    description: `${post.metadata.teaser}`,
  };
}

const PostForBlog = async ({ params }) => {
  const post = await getPost(params);
  const suggestedPosts = await getSimilarPosts(params);
  // console.log(post);
  // console.log(suggestedPosts);
  return (
    <>
      {/* <Meteors number={40} className={`absolute z-[1]`} /> */}
      <div className="bg-gradient-to-b from-gray-100 to-slate-700 dark:from-black dark:to-slate-700 w-[100vw] pt-[10vh] smd:pb-[10vh] overflow-hidden flex flex-row">
        <div className="smd:basis-2/12 hidden smd:flex bg-transparent"></div>
        <div className="basis-full smd:basis-8/12 block bg-white dark:bg-black smd:rounded-md p-[50px]">
          <BlogPost post={post} />
        </div>
        <div className="smd:basis-2/12 hidden smd:block bg-transparent py-[30px] space-y-5">
          <h2 className="px-[20px] font-bold text-lg">Similar Posts</h2>
          <ul>
            {suggestedPosts &&
              suggestedPosts.splice(6, 12).map((post) => {
                return (
                  <li className="w-[100%] px-[10px] line-clamp-2" key={post.id}>
                    <Link href={`/posts/${post.slug}`}>
                      <AspectRatio ratio={16 / 9}>
                        <Image
                          fill
                          className="mb-5 h-[400px] w-full rounded-lg rounded-b-none bg-no-repeat object-cover object-center"
                          src={`${post.metadata.hero.imgix_url}`}
                          priority
                          alt={post.title}
                          placeholder="blur"
                          blurDataURL={`${post.metadata.hero.imgix_url}?auto=format,compress&q=1&blur=500&w=2`}
                        />
                      </AspectRatio>
                      - {post.title}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="flex w-full">
        <div className="smd:basis-2/12 hidden smd:flex bg-transparent"></div>
        <h2 className="text-2xl font-bold p-[20px] smd:p-[100px] mb-[-120px]">
          Suggested Posts
        </h2>
        <div className="p-[20px] smd:p-[100px] grid grid-cols-1 xmd:grid-cols-3 md:grid-cols-2 gap-5 w-[100%] min-h-[100vh] my-[100px] md:my-0">
          {suggestedPosts &&
            suggestedPosts.splice(0, 6).map((post) => {
              return (
                <span key={post.id}>
                  <Post post={post} />
                </span>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default PostForBlog;