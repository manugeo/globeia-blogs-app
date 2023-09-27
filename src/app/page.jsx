'use client'

import Home from "@/components/pages/Home";
import BlogsContext from "@/contexts/blogs-contex";
import useBlogs from "@/hooks/useBlogs";

export default function Page() {
  const { blogs, createBlog } = useBlogs();

  return <BlogsContext.Provider value={{ blogs, createBlog }}>
    <Home />
  </BlogsContext.Provider>
}
