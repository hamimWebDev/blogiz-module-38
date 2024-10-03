import { Blog } from "@/types";
import React from "react";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div>
      <h1 className="text-4xl text-center my-5">
        Latest Blogs from <span className="text-accent">BlogIz</span>
      </h1>
      <p className="text-xl text-center text-gray-500 w-2/4 mx-auto">
        <i>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
          Totam odio impedit velit odit porro, eveniet fugit debitis
          consequuntur sit saepe quae sequi ullam quod!{" "}
        </i>
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-4 p-4 lg:p-8">
        {
            blogs.slice(0,2).map(blog=><LatestBlogCard key={blog.id} blog={blog}/>)
        }
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-4 p-4 lg:p-8">
        {
            blogs.slice(2,5).map(blog=><BlogCard key={blog.id} blog={blog}/>)
        }
      </div>
    </div>
  );
};

export default LatestBlogs;
