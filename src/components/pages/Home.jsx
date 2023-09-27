import BlogList from "../blog-list";
import Separator from "../ui/separator";
import { TextH3, TextMuted, TextP, TextSmall } from "../ui/texts";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="mt-8 px-6">
        <TextH3>Globeia - Blogs App</TextH3>
        <TextSmall className="mt-4">Next.js Blogging App with CRUD Functionality</TextSmall>
      </div>
      <Separator className="mx-6" />
      <BlogList />
    </div>
  )
};

export default Home;