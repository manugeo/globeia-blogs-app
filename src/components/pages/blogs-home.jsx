import BlogList from "../blog-list";
import CreateBlogButton from "../create-blog-button";
import Separator from "../ui/separator";
import { TextH3, TextSmall } from "../ui/texts";

const Home = () => {
  return (
    <div className="flex flex-col pb-6">
      <div className="mt-8 px-6">
        <TextH3>Globeia - Blogs App</TextH3>
        <TextSmall className="mt-4">Next.js Blogging App with CRUD Functionality</TextSmall>
      </div>
      <Separator className="mt-6 mx-6" />
      <CreateBlogButton className="mt-6 mx-6" />
      <Separator className="mt-6 mx-6" />
      <BlogList className='mt-6 px-6' />
    </div>
  )
};

export default Home;