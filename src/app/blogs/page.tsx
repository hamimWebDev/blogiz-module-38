"use client";
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/blogsApi/blogsApi";
import { Blog } from "@/types";
import React from "react";

const page = () => {
  // const res = await fetch("http://localhost:5000/blogs", {
  //   cache: "no-store",
  // });
  // const blogs = await res.json();
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: blogs, error, isLoading } = useGetBlogsQuery(undefined);

  return (
    <div>
      <h1 className="text-4xl text-center my-5">
        All Blogs from <span className="text-accent">BlogIz</span>
      </h1>
      <p className="text-xl text-center text-gray-500 w-2/4 mx-auto">
        <i>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
          Totam odio impedit velit odit porro, eveniet fugit debitis
          consequuntur sit saepe quae sequi ullam quod!{" "}
        </i>
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-4 p-4 lg:p-8">
        {blogs?.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default page;
