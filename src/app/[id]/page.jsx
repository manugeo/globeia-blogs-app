import BlogDetails from "@/components/pages/blog-details";

export async function generateMetadata({ searchParams, params }, parent) {
  const parentMetadata = await parent
  return {
    title: searchParams.title || parentMetadata?.title,
    description: searchParams.description || parentMetadata?.description,
    alternates: {
      canonical: `https://globeia-blogs-app.vercel.app/${params?.id}`
    }
  }
}

const Page = () => {
  return <BlogDetails />;
};

export default Page;