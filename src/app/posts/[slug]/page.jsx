import { notFound } from "next/navigation";
import { Meteors } from "@/components/meteors";
import { getPost, getSimilarPosts } from "@/lib/cosmic";
import BlogPost from "@/components/BlogPost";
import Post from "@/components/Post";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import ProgressTracker from "@/components/ProgressTracker";
// app/posts/[slug]/page.jsx
export async function generateMetadata({ params }) {
  const post = await getPost(params);
  // const post = currentPost.objects;
  if (post && post.metadata == undefined) {
    notFound();
  }
  if (post != [] && post.metadata != undefined) {
    return {
      title: `${post.title}`,
      description: `${post.metadata.teaser}`,
      keywords: `${post.metadata.keywords}`,
    };
  }
}

const PostForBlog = async ({ params }) => {
  const post = await getPost(params);
  const suggestedPosts = await getSimilarPosts(
    params,
    post.metadata.categories.replace(" ", "").split(","),
    post.metadata.sub_categories.replace(" ", "").split(",").join("|"),
    post.metadata.keywords.replace(" ", "").split(",").join("|"),
  );
  // console.log(post);
  // console.log(suggestedPosts);
  return (
    <>
      {/* <Meteors number={40} className={`absolute z-[1]`} /> */}
      <ProgressTracker />
      <Meteors number={40} className={`absolute z-[1]`} />
      <div className="bg-gradient-to-b from-gray-100 to-black dark:from-black dark:to-slate-700 w-[100vw] pt-[10vh] xmd:pb-[10vh] overflow-hidden flex flex-row">
        <div className="smd:basis-2/12 hidden xmd:flex bg-transparent"></div>
        <div className="basis-full xmd:basis-8/12 block bg-white dark:bg-black xmd:rounded-md p-[50px]">
          <BlogPost post={post} />
        </div>
        <div className="xmd:basis-2/12 hidden xmd:block bg-transparent py-[30px] space-y-5">
          <h2 className="px-[20px] font-bold text-lg">Similar Posts</h2>
          <ul>
            {suggestedPosts &&
              suggestedPosts.slice(6, 13).map((post) => {
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
      <div className="flex flex-row overflow-hidden w-full">
        <div className="mx-0">
          <h2 className="text-2xl font-bold p-[20px] smd:p-[100px] mb-[-120px]">
            Suggested Posts
          </h2>
          <div className="p-[20px] smd:p-[100px] grid grid-cols-1 xmd:grid-cols-3 md:grid-cols-2 gap-5 w-[100%] min-h-[100vh] my-[100px] md:my-0">
            {suggestedPosts &&
              suggestedPosts.slice(0, 5).map((post) => {
                return (
                  <span key={post.id}>
                    <Post post={post} />
                  </span>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostForBlog;
