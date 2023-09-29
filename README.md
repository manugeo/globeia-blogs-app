# Globeia - Blogs App

This is a Next.js Blogging App with CRUD (Create, Read, Update, Delete) functionality. It allows users to create and list blogs.

The app is connected to an existing backend service built with MongoDB, and you can find the backend repository [here](https://github.com/manugeo/blog-list).

## Important Note for First-Time Users

Please be aware that the initial loading of blogs may take a bit longer, especially if you are accessing the app for the first time. This delay is due to the use of a free instance for hosting the backend services. Free instance types may spin down with inactivity, leading to a short delay in response.

Subsequent loading times should be significantly faster. Thank you for your patience!

## Getting Started

To run the development server, use the following command:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app's result. You can start editing the pages by modifying the files in the `app/pages` directory. The page auto-updates as you edit.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load the Inter font, a custom Google Font.

## Access the App

The Globeia Blogs App is deployed and accessible at the following URL: [https://globeia-blogs-app.vercel.app/](https://globeia-blogs-app.vercel.app/).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
