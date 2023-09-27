'use client'

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { TextP } from "./ui/texts";
import useBlogsService from "@/hooks/useBlogsService";

const BlogList = () => {
  const { blogs } = useBlogsService();

  return (
    <div className="mt-6 px-6">
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