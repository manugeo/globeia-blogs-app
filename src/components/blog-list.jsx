'use client'

import useBlogsFromContext from "@/hooks/useBlogsFromContext";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { TextP } from "./ui/texts";
import { Button } from "./ui/button";
import Link from "next/link";
import { getTruncatedString } from "@/lib/utils";

const BlogList = ({ className }) => {
  const { blogs, isInitializing } = useBlogsFromContext();

  const getTruncatedDescription = (description) => getTruncatedString(description, 150);

  return isInitializing ? (
    <div className={className}>
      <TextP>Loading Blogs, Please Wait...</TextP>
    </div>
  ) : (
    <div className={className}>
      {(blogs.length ? blogs.map(({ id, title, description }, i) => <Card key={id} className={(i === 0) ? '' : 'mt-6'}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <TextP className="whitespace-pre-wrap">{getTruncatedDescription(description)}</TextP>
        </CardContent>
        <CardFooter>
          <Link className="flex-grow" href={`/${id}`} passHref>
            <Button className="w-full">Read More</Button>
          </Link>
        </CardFooter>
      </Card>) : <TextP>No Blogs Found.</TextP>)}
      { }
    </div>
  );
};

export default BlogList;