// lib/cosmic.ts
import { createBucketClient } from "@cosmicjs/sdk";

const cosmic = createBucketClient({
  // @ts-ignore
  bucketSlug: process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG ?? "",
  // @ts-ignore
  readKey: process.env.NEXT_PUBLIC_COSMIC_READ_KEY ?? "",
});

// lib/cosmic.js

export async function getSimilarPosts(params) {
  try {
    const data = await Promise.resolve(
      cosmic.objects
        .find({
          type: "posts",
          slug: {
            $ne: params.slug,
          },
        })
        .props(
          "id,type,slug,title,metadata.hero,metadata.teaser,metadata.published_date,metadata.categories,created_at",
        )
        .sort("random")
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

export async function getPost(params) {
  try {
    // Get all posts
    const data = await Promise.resolve(
      cosmic.objects
        .findOne({
          type: "posts",
          slug: params.slug,
        })
        .props("slug, title, metadata"),
    );
    const post = await data.object;
    return Promise.resolve(post);
  } catch (error) {
    console.log("Oof", error);
  }
  return Promise.resolve([]);
}
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

export async function getFirstPosts(posts_count) {
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
        .limit(posts_count),
    );
    const posts = await data;
    console.log(posts);
    return Promise.resolve(posts);
  } catch (error) {
    console.log("Oof", error);
  }
  return Promise.resolve([]);
}

export async function getLaterPosts(posts_count, posts_to_skip) {
  try {
    // Get all posts
    // console.log("Skip count", posts_to_skip);
    // console.log("Posts count", posts_count);
    const data = await Promise.resolve(
      cosmic.objects
        .find({
          type: "posts",
        })
        .props(
          "id,type,slug,title,metadata.hero,metadata.teaser,metadata.published_date,metadata.categories,created_at",
        )
        .depth(1)
        .skip(posts_to_skip)
        .limit(posts_count),
    );
    const posts = await data;
    console.log(posts);
    return Promise.resolve(posts);
  } catch (error) {
    console.log("Oof", error);
  }
  return Promise.resolve([]);
}

export default cosmic;
