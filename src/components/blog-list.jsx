'use client'

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { TextP } from "./ui/texts";
import useBlogsService from "@/hooks/useBlogsService";

const BlogList = ({ className }) => {
  const { blogs } = useBlogsService();

  return (
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