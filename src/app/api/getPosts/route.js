import { getLaterPosts } from "@/lib/cosmic";
import { NextResponse } from "next/server";
export async function POST(req) {
  const data = await req.json();
  const { posts_count, posts_to_skip } = data;
//   console.log("Skip count", posts_to_skip);
//   console.log("Posts count", posts_count);
  const response = await getLaterPosts(posts_count, posts_to_skip);
  return new NextResponse(JSON.stringify(response));
}
