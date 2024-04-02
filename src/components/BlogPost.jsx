import helpers from "@/helpers";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import { Badge } from "./ui/badge";
import Ad from "@/components/BannerAd";
import CopyURLButton from "./CopyUrlToClipboard";
import { getNextSlug } from "@/lib/cosmic";
import Link from "next/link";
const BlogPost = async ({ post }) => {
  const nextSlug = await getNextSlug(post.id);
  const content = post.metadata.content.split("</p>");
  let htmlContent = "";
  content.forEach((section, index) => {
    if (index != content.length - 1 && index % 2 == 0) {
      htmlContent += section + `</p><br />${Ad}<br />`;
    } else {
      htmlContent += section;
    }
  });

  //   const htmlContent = post.metadata.content.replace(
  //     "</p>",
  //     `</p><br />${Ad}<br />`,
  //   );

  return (
    <>
      <div className="flex max-h-[80vh] min-h-[50vh] w-[100%] justify-center items-center text-center">
        <AspectRatio ratio={16 / 9}>
          <Image
            // width={2800}
            // height={400}
            fill
            className="mb-5 h-[400px] w-full rounded-lg rounded-b-none bg-no-repeat object-cover object-center"
            src={`${post.metadata.hero.imgix_url}`}
            // priority
            alt={post.title}
            placeholder="blur"
            blurDataURL={`${post.metadata.hero.imgix_url}?auto=format,compress&q=1&blur=500&w=2`}
          />
        </AspectRatio>
      </div>
      <div className="block min-h-[100vh] pt-[10vh] text-4xl">
        <div className="font-extrabold tracking-tighter text-6xl">
          {post.title}
        </div>
        <div className="text-sm block">
          Published on{" "}
          {helpers.stringToFriendlyDate(post.metadata.published_date)}
        </div>
        <div className="text-xs block dark:text-gray-100 pb-[25px]">
          Written by Science Maverick
          <Image
            src="../../../logos/1.svg"
            alt="Science Maverick Logo"
            width="75"
            height="75"
            className="hidden dark:block"
          />
          <Image
            src="../../../logos/2.svg"
            alt="Science Maverick Logo"
            width="75"
            height="75"
            className="block dark:hidden"
          />
        </div>
        <div>
          <CopyURLButton />
        </div>
        <div className="text-sm pb-[25px] space-x-2">
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
          {post.metadata.sub_categories
            .replace(" ", "")
            .split(",")
            .map(
              (sub_category, idx) =>
                sub_category != "" &&
                sub_category != " " && (
                  <Badge key={`badge-category-${idx}`}>{sub_category}</Badge>
                ),
            )}
        </div>
        <hr className="bg-zinc-500 dark:bg-white dark:h-[2px]" />
        <br />
        <div className="space-y-5">
          <div>
            <div className="text-md">Description</div>
            <p className="text-sm">
              <div
                className="text-zinc-500 dark:text-zinc-300"
                dangerouslySetInnerHTML={{ __html: post.metadata.teaser ?? "" }}
              />
            </p>
          </div>
          <div>
            <div className="text-[40px]">About the author</div>
            <p className="text-sm text-zinc-500 dark:text-zinc-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              voluptatum facere quibusdam fugiat officiis nesciunt perferendis
              ab maxime earum aperiam tempore sapiente a asperiores in nam,
              perspiciatis natus reiciendis hic!
            </p>
          </div>
          <div className="text-[16px] leading-8">
            <div className="text-[40px] leading-12 py-[20px]">{post.title}</div>
            <article>
              <div
                className="text-zinc-500 dark:text-zinc-300"
                dangerouslySetInnerHTML={{ __html: htmlContent ?? "" }}
              />
            </article>
          </div>

          <div className="text-sm pt-[150px]">Keywords</div>
          <div className="text-sm pb-[25px] space-x-2">
            {post.metadata.keywords
              .split(",")
              .map(
                (keyword, idx) =>
                  keyword != "" &&
                  keyword != " " && (
                    <Badge key={`badge-category-${idx}`}>{keyword}</Badge>
                  ),
              )}
          </div>

          <div className="flex justify-end">
            <Link href={`${nextSlug.slug}`}>
              <span
                className={`text-sm hover:text-slate-700 dark:hover:text-gray-500`}
              >
                Next
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogPost;
