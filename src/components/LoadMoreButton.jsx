"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Post from "./Post";
const LoadMoreButton = ({ skip_count, limit }) => {
  const [posts, setPosts] = useState([]);
  const [skipCount, setSkipCount] = useState(skip_count);
  const [isLoading, setIsLoading] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const loadMore = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/getPosts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          posts_count: limit,
          posts_to_skip: skipCount,
        }),
      });

      if (res.status == 200) {
        const data = await res.json();
        setPosts([...posts, ...data.objects]);
        setSkipCount(skipCount + data.limit);
        console.log(data.total, skipCount);
        console.log(data.total <= skipCount + data.limit);
        const skipPC = skipCount + data.limit;
        if (data.total < skipPC || data.total == skipPC) {
          setShowButton(false);
        }
        setIsLoading(false);
        return data;
      } else {
        return { objects: [], total: skip_count, limit: limit };
      }
    } catch (e) {
      return e;
    }
  };

  //   const loadMoreEvent = async (skip_count, limit) => {
  //     const data = await loadMore(skip_count, limit);
  //   };

  return (
    <>
      {posts.length != 0 && (
        <>
          {posts &&
            posts.map((post) => {
              return (
                <span key={post.id}>
                  <Post post={post} />
                </span>
              );
            })}
        </>
      )}

      {isLoading && (
        <>
          <div className={`space-y-5`}>
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className={`space-y-5`}>
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className={`space-y-5`}>
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </>
      )}

      <div className="text-center loadMoreButton">
        {showButton && (
          <Button
            onClick={() => (!isLoading ? loadMore() : console.log("loading"))}
          >
            <span className={`${isLoading && "disabled"}`}>
              {isLoading ? "Loading..." : "Load More"}
            </span>
          </Button>
        )}
      </div>
    </>
  );
};
export default LoadMoreButton;
