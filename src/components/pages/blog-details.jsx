'use client'

import { useParams, useRouter } from "next/navigation";
import { TextH3, TextP } from "../ui/texts";
import useBlogsFromContext from "@/hooks/useBlogsFromContext";
import Separator from "../ui/separator";
import { Button } from "../ui/button";
import { ChevronLeft, Pencil, Trash2 } from "lucide-react";
import EditBlogButton from "../edit-blog-button";

const BlogDetails = () => {
  const params = useParams()
  const { blogs, isInitializing } = useBlogsFromContext();
  const currentBlog = blogs.find(blog => blog.id === params.id);
  const router = useRouter();

  return (
    <div className="flex flex-col pb-6">
      <div className="mt-4 mx-6 flex">
        <Button variant="outline" size="icon" onClick={() => router.back()}><ChevronLeft /></Button>
        {currentBlog && <>
          <EditBlogButton currentBlog={currentBlog} className="ml-auto" />
          <Button variant="outline" size="icon" className="ml-1"><Trash2 /></Button>
        </>}
      </div>
      {isInitializing ? (
        <div className={'mt-4 px-6'}>
          <TextP className="text-center">Loading Blogs, Please Wait...</TextP>
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