import BlogsContext from "@/contexts/blogs-contex";
import { useContext } from "react";

const useBlogsFromContext = () => {
  return useContext(BlogsContext);
};

export default useBlogsFromContext;