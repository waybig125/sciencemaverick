import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import ArrowRight from "./icons/ArrowRight";
import Tag from "./Tag";
import AuthorAttribution from "./AuthorAttribution.jsx";
import AuthorAvatar from "./AuthorAvatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

// components/PostCard.jsx
export default function PostCard({ post }) {
  return (
    <>
      <div className="w-[90%] lg:w-[80%] text-black dark:text-white m-[5%] lg:m-[30px] pb-[10px]">
        <Card>
          {post.metadata.hero.imgix_url && (
            <Link href={`/posts/${post.slug}`}>
              <AspectRatio ratio={16 / 9}>
                <Image
                  // width={2800}
                  // height={400}
                  fill
                  // className="mb-5 h-[400px] w-full rounded-xl bg-no-repeat object-cover object-center transition-transform duration-200 ease-out hover:scale-[1.02]"
                  src={`${post.metadata.hero.imgix_url}`}
                  priority
                  alt={post.title}
                  placeholder="blur"
                  style={{ width: "70%", height: "auto" }}
                  blurDataURL={`${post.metadata.hero.imgix_url}?auto=format,compress&q=1&blur=500&w=2`}
                />
              </AspectRatio>
            </Link>
          )}
          <CardHeader>
            <CardTitle>
              <h2 className="pb-3 text-md font-semibold tracking-tight">
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </h2>
            </CardTitle>
            <CardDescription>{excerpt}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              <div className="flex flex-col justify-between space-y-4 md:flex-row md:space-y-0">
                <div className="flex items-center space-x-2 text-zinc-500 dark:text-zinc-400 md:space-y-0">
                  <AuthorAvatar />
                  <AuthorAttribution post={post} />
                </div>
              </div>
            </p>
          </CardContent>
          <CardFooter>
            <div className="flex select-none justify-start space-x-2 md:hidden md:justify-end">
              {post.metadata.categories &&
                post.metadata.categories.map((category) => (
                  <Tag key={category.title}>{category.title}</Tag>
                ))}
            </div>
            <div
              className="py-6 text-zinc-500 dark:text-zinc-300"
              dangerouslySetInnerHTML={{ __html: post.metadata.teaser ?? "" }}
            />
            <div className="flex items-center justify-between font-medium text-green-600 dark:text-green-200">
              <Link href={`/posts/${post.slug}`}>
                <div className="flex items-center space-x-2">
                  <span>Read more</span>
                  <ArrowRight className="h-4 w-4 text-inherit" />
                </div>
              </Link>
              <div className="hidden select-none justify-end space-x-2 md:flex">
                {post.metadata.categories &&
                  post.metadata.categories.map((category) => (
                    <Tag key={category.title}>{category.title}</Tag>
                  ))}
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
