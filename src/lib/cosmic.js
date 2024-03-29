// lib/cosmic.ts
import { createBucketClient } from "@cosmicjs/sdk";

const cosmic = createBucketClient({
  // @ts-ignore
  bucketSlug: process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG ?? "",
  // @ts-ignore
  readKey: process.env.NEXT_PUBLIC_COSMIC_READ_KEY ?? "",
});

// lib/cosmic.ts
export async function getAllPosts() {
  try {
    // Get all posts
    const data = await Promise.resolve(
      cosmic.objects
        .find({
          type: "posts",
        })
        .props("id,type,slug,title,metadata,created_at")
        .depth(1),
    );
    const posts = await data.objects;
    return Promise.resolve(posts);
  } catch (error) {
    console.log("Oof", error);
  }
  return Promise.resolve([]);
}

export default cosmic;
