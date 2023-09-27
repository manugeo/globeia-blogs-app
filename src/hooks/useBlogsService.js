import { useEffect, useState } from "react";
import { customFetch } from "@/lib/utils";

const useBlogsService = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const initializeBlogs = async () => {
      const response = await customFetch('/blogs', 'GET');
      if (response) setBlogs(response);
    };
    initializeBlogs();
  }, []);

  return { blogs };
};

export default useBlogsService;