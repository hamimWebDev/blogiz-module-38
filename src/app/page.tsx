"use client";
import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import Banner from "@/components/shared/Banner";
import { useGetBlogsQuery } from "@/redux/blogsApi/blogsApi";

const HomePage = () => {
  const { data, error, isLoading } = useGetBlogsQuery({});
  if (isLoading) {
    return <p>loading...</p>;
  }
  console.log(data);

  return (
    <>
      <Banner />
      <LatestBlogs blogs={data} />
    </>
  );
};

export default HomePage;
