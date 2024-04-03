import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import helpers from "@/helpers";
import { Badge } from "./ui/badge";
// import ReactHtmlParser from "react-html-parser";

const Post = ({ post, carousel = false }) => {
  // function HtmlToTextComponent({ html }) {
  //   const text = ReactHtmlParser(html, {
  //     transform: (node) => {
  //       if (node.type === "text") return node.data;
  //     },
  //   }).join("");

  //   return <p>{text}</p>;
  // }
  // console.log(post);
  return (
    <>
      <div className={`text-black dark:text-white rounded-lg min-h-[80vh]`}>
        <Card
          className={`rounded-lg sm:min-h-[60vh] smd:min-h-[60vh] md:min-h-[60vh] lg:min-h-[80vh]`}
        >
          {post.metadata.hero.imgix_url && (
            <Link href={`/posts/${post.slug}`}>
              <AspectRatio ratio={16 / 9}>
                <Image
                  // width={2800}
                  // height={400}
                  fill
                  className="mb-5 h-[400px] w-full rounded-lg rounded-b-none bg-no-repeat object-cover object-center transition-transform duration-200 ease-out hover:scale-[1.02]"
                  src={`${post.metadata.hero.imgix_url}`}
                  priority
                  alt={post.title}
                  placeholder="blur"
                  blurDataURL={`${post.metadata.hero.imgix_url}?auto=format,compress&q=1&blur=500&w=2`}
                />
              </AspectRatio>
            </Link>
          )}
          <CardHeader>
            <CardTitle>
              <h2 className="mb-2 text-md font-semibold line-clamp-2 overflow-hidden">
                <Link href={`/posts/${post.slug}`} title={post.title}>
                  {post.title}
                </Link>
              </h2>
            </CardTitle>
            <CardDescription>
              <div
                className="text-zinc-500 dark:text-zinc-300 line-clamp-4"
                dangerouslySetInnerHTML={{ __html: post.metadata.teaser ?? "" }}
              />
              <div className="text-sm space-x-2 py-[5px]">
                {post.metadata.categories
                  .replace(" ", "")
                  .split(",")
                  .map(
                    (category, idx) =>
                      category != "" &&
                      category != " " && (
                        <Badge key={`badge-category-${idx}`}>{category}</Badge>
                      ),
                  )}
              </div>
              <div className="text-sm mb-[-10px]">
                Written by Science Maverick
                <Image
                  src="../../../logos/1.svg"
                  alt="Science Maverick Logo"
                  width="50"
                  height="50"
                  className="hidden dark:inline"
                />
                <Image
                  src="../../../logos/2.svg"
                  alt="Science Maverick Logo"
                  width="50"
                  height="50"
                  className="inline dark:hidden"
                />
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href={`/posts/${post.slug}`}>
              <div className="flex items-center space-x-2 my-[-10px]">
                <span>Read more</span>
              </div>
            </Link>
          </CardContent>
          <CardFooter>
            <div className="font-nunito font-medium text-slate-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
              <div className="text-xs block">
                Published on{" "}
                {helpers.stringToFriendlyDate(post.metadata.published_date)}
              </div>
              <div className="hidden select-none justify-end space-x-2 md:flex">
                {/* post.metadata.category */}
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
      {/* <div className="w-[90%] lg:w-[80%] bg-white dark:bg-black text-black dark:text-white rounded-md m-[5%] lg:m-[30px] pb-[10px] border-solid border-2">
        <div className={`w-[50%] z-[-1] text-right block`}>
          <Image
            src={`illustrations/8.svg`}
            style={{ width: "70%", height: "auto" }}
            width="700"
            height="1000"
          />
        </div> */}
      {/* <div className="block md:hidden">
          <h1 className={`text-2xl font-bold`}>THIS IS MY BLOG HEADLINE</h1>
          <p className="text-primary">This is my science blog</p>
        </div> */}
      {/* <div className="w-[100%] h-[300px] m-[0]"></div>
        <div className="pl-[20px]">
          <div className={`font-bold text-2xl`}>{title}</div>
          <div className="font-medium text-lg">{excerpt}</div>
          <span className="dark:text-gray-100 text-gray-700">
            {date.toString()}
          </span>
        </div>
      </div> */}
    </>
  );
};
export default Post;
