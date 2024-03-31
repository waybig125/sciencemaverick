import BlogHero from "@/components/BlogHero";
import LoadMoreButton from "@/components/LoadMoreButton";
import Post from "@/components/Post";
import { getFirstPosts } from "@/lib/cosmic";

const Posts = async () => {
  const firstPostsReq = await getFirstPosts(3);
  const firstPosts = firstPostsReq.objects;
  const total_posts_count = firstPostsReq.total;
  const limit_to_add = firstPostsReq.limit;
  const loadedPosts = limit_to_add;

  return (
    <>
      <BlogHero />
      <div className="w-[100vw] min-h-[200vh] bg-white dark:bg-black my-0">
        <div className="p-[20px] smd:p-[100px] grid grid-cols-1 xmd:grid-cols-3 md:grid-cols-2 gap-5 w-[100%] min-h-[100vh] my-[100px] md:my-0">
          {!firstPosts && "You must add at least one Post to your Bucket"}
          {firstPosts &&
            firstPosts.map((post) => {
              return (
                <span key={post.id}>
                  <Post post={post} />
                </span>
              );
            })}
          <LoadMoreButton skip_count={loadedPosts} limit={limit_to_add} />
        </div>
      </div>
    </>
  );
};
export default Posts;
