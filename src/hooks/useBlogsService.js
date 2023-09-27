import { useEffect, useState } from "react";
import { customFetch } from "@/lib/utils";

const blogUrl = '/blogs';

const useBlogsService = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const initializeBlogs = async () => {
      const response = await customFetch(blogUrl, 'GET');
      if (response) setBlogs(response);
    };
    initializeBlogs();
  }, []);

  const createBlog = async ({ title, description }) => {
    const body = { title, description };
    const response = await customFetch(blogUrl, 'POST', body);
    if (response) setBlogs([response, ...blogs]);
    return response;
  };

  return { blogs, createBlog };
};

export default useBlogsService;