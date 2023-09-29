'use client'

import useBlogsFromContext from "@/hooks/useBlogsFromContext";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { TextP } from "./ui/texts";

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
          <TextP>{description}</TextP>
        </CardContent>
      </Card>)}
    </div>
  );
};

export default BlogList;