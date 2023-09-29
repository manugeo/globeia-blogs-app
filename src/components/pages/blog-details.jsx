'use client'

import { useParams, useRouter } from "next/navigation";
import { TextH3, TextP } from "../ui/texts";
import useBlogsFromContext from "@/hooks/useBlogsFromContext";
import Separator from "../ui/separator";
import { Button } from "../ui/button";
import { ChevronLeft, Pencil, Trash2 } from "lucide-react";
import EditBlogButton from "../edit-blog-button";
import DeleteBlogButton from "../delete-blog-button";
import { useEffect, useState } from "react";

const BlogDetails = () => {
  const params = useParams()
  const { blogs, isInitializing } = useBlogsFromContext();
  const [currentBlog, setCurrentBlog] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (params?.id && blogs?.length) {
      const blog = blogs.find(blog => blog.id === params.id);
      if (blog) {
        setCurrentBlog(blog);
      }
      else {
        router.replace('/');
      }
    }
  }, [blogs, params.id, router]);

  return (
    <div className="flex flex-col pb-6">
      <div className="mt-4 mx-6 flex">
        <Button variant="outline" size="icon" onClick={() => router.back()}><ChevronLeft /></Button>
        {currentBlog && <>
          <EditBlogButton currentBlog={currentBlog} className="ml-auto" />
          <DeleteBlogButton id={currentBlog.id} className="ml-1" />
        </>}
      </div>
      {isInitializing ? (
        <div className={'mt-4 px-6'}>
          <TextP className="text-center">Loading Blog, Please Wait...</TextP>
        </div>
      ) : (currentBlog && <>
        <TextH3 className="mt-4 px-6">{currentBlog.title}</TextH3>
        <Separator className="mt-6 mx-6" />
        <TextP className="mt-6 px-6 whitespace-pre-wrap">{currentBlog.description}</TextP>
      </>)}

    </div>
  );
};

export default BlogDetails;