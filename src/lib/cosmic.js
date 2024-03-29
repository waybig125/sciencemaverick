// lib/cosmic.ts
import { createBucketClient } from "@cosmicjs/sdk";

const cosmic = createBucketClient({
  // @ts-ignore
  bucketSlug: process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG ?? "",
  // @ts-ignore
  readKey: process.env.NEXT_PUBLIC_COSMIC_READ_KEY ?? "",
});

// lib/cosmic.ts
export async function getThreePosts() {
  try {
    // Get all posts
    const data = await Promise.resolve(
      cosmic.objects
        .find({
          type: "posts",
        })
        .props(
          "id,type,slug,title,metadata.hero,metadata.teaser,metadata.published_date,metadata.categories,created_at",
        )
        .depth(1)
        .limit(3),
    );
    const posts = await data.objects;
    return Promise.resolve(posts);
  } catch (error) {
    console.log("Oof", error);
  }
  return Promise.resolve([]);
}

export async function getTwelvePosts() {
  try {
    // Get all posts
    const data = await Promise.resolve(
      cosmic.objects
        .find({
          type: "posts",
        })
        .props(
          "id,type,slug,title,metadata.hero,metadata.teaser,metadata.published_date,metadata.categories,created_at",
        )
        .depth(1)
        .limit(12),
    );
    const posts = await data.objects;
    return Promise.resolve(posts);
  } catch (error) {
    console.log("Oof", error);
  }
  return Promise.resolve([]);
}

export default cosmic;
