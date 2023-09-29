import { useEffect, useState } from "react";
import { customFetch } from "@/lib/utils";

const blogUrl = '/blogs';

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isInitializing, setIsInitializing] = useState(false);

  useEffect(() => {
    const initializeBlogs = async () => {
      setIsInitializing(true);
      const response = await customFetch(blogUrl, 'GET');
      if (response) setBlogs(response);
      setIsInitializing(false);
    };
    initializeBlogs();
  }, []);

  const createBlog = async ({ title, description }) => {
    const body = { title, description };
    const response = await customFetch(blogUrl, 'POST', body);
    if (response) setBlogs([response, ...blogs]);
    return response;
  };

  const updateBlog = async ({ id, title, description }) => {
    const body = { title, description };
    const response = await customFetch(`${blogUrl}/${id}`, 'PUT', body);
    if (response) {
      const updatedBlogs = blogs.map(blog => {
        return (blog.id === id) ? { ...blog, ...body } : blog;
      });
      setBlogs(updatedBlogs);
    }
    return response;
  };

  return { blogs, isInitializing, createBlog, updateBlog };
};

export default useBlogs;