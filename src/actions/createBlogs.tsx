"use server";
import { Blog } from "@/types";
import React from "react";

const createBlogs = async (data: Blog) => {
  const res = await fetch("http://localhost:5000/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const blogInfo = await res.json();
  return blogInfo;
};

export default createBlogs;
