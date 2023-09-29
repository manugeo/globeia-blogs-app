'use client';

import ThemeProvider from '@/components/theme-provider';
import BlogsContext from '@/contexts/blogs-contex';
import useBlogs from '@/hooks/useBlogs';

export function Providers({ children }) {
  const { blogs, isInitializing, createBlog, updateBlog, deleteBlog } = useBlogs();

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BlogsContext.Provider value={{ blogs, isInitializing, createBlog, updateBlog, deleteBlog }}>
        {children}
      </BlogsContext.Provider>
    </ThemeProvider>
  );
}