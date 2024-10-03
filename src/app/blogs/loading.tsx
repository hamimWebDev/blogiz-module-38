import LoadingCard from "@/components/ui/LoadingCard";
import { Blog } from "@/types";
import React from "react";

const loading = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs: Blog[] = await res.json();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {blogs.map((blog) => (
        <LoadingCard key={blog.id} />
      ))}
    </div>
  );
};

export default loading;
