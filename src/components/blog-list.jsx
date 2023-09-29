'use client'

import useBlogsFromContext from "@/hooks/useBlogsFromContext";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { TextP } from "./ui/texts";
import { Button } from "./ui/button";
import Link from "next/link";

const BlogList = ({ className }) => {
  const { blogs, isInitializing } = useBlogsFromContext();

  return isInitializing ? (
    <div className={className}>
      <TextP className="text-center">Loading Blogs, Please Wait...</TextP>
    </div>
  ) : (
    <div className={className}>
      {blogs.map(({ id, title, description }, i) => <Card key={id} className={(i === 0) ? '' : 'mt-6'}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <TextP className="whitespace-pre-wrap">{description}</TextP>
        </CardContent>
        <CardFooter>
          <Link href={`/${id}`} passHref>
            <Button>Read More</Button>
          </Link>
        </CardFooter>
      </Card>)}
    </div>
  );
};

export default BlogList;