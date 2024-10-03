import BlogDetails from "@/components/ui/BlogDetails";
import { Blog } from "@/types";
import React from "react";

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs: Blog[] = await res.json();
  return blogs.slice(0, 3).map((blog: Blog) => ({
    blogId: blog.id,
  }));
};

const page = async ({ params }: { params: { blogId: string } }) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
    cache: "no-store",
  });
  const blog = await res.json();
  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  );
};

export default page;
