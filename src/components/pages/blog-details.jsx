'use client'

import { useParams } from "next/navigation";
import { TextH3, TextP } from "../ui/texts";
import useBlogsFromContext from "@/hooks/useBlogsFromContext";
import Separator from "../ui/separator";

const BlogDetails = () => {
  const params = useParams()
  const { blogs } = useBlogsFromContext();
  const currentBlog = blogs.find(blog => blog.id === params.id);

  console.log('params:', params, 'blogs :', blogs);


  return (
    <div className="flex flex-col pb-6">
      <TextH3 className="mt-8 px-6">{currentBlog.title}</TextH3>
      <Separator className="mt-6 mx-6" />
      <TextP className="mt-6 px-6 whitespace-pre-wrap">{currentBlog.description}</TextP>
    </div>
  );
};

export default BlogDetails;