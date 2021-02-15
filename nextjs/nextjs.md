# Nextjs

- Look up next/router (Also try find pain points)

- `Catch-all routes` Like a glob f.x this/folder/\*\* <- Catches everything after "/folder"
  In nextjs this would look like docs/[...params].jsx

  ```javascript
  // file name is pages/notes/[...params].jsx
  import { useRouter } from 'next/router';

  const Page = () => {
    const router = useRouter();

    // Example url: /notes/1/2/3/4
    const { params } = router.query;
    console.log(params); // Result would be [1,2,3,4]
  };
  ```

  - An example of where we would do this would be if had a ton of pages using the same layout for example a docs pages.
    We could render all of the pages with one route which would all use the same a layout, while maintaing have different params for each page. (Not sure how this would work for SSG)

- Look up optional catch all routes

- Use `next/link` for client side routing. Uses' html 5 push api.

  ```javascript
  // Notes is the folder name (route). The link component will pass the href to the anchor tag.
  <Link href="/notes">
    <a>Random link</a>
  </Link>

  // Use "as" prop for dyanmic routing
  <Link href="/notes/[id]" as={'/notes/1'}>
    <a>Random link</a>
  </Link>
  ```

- For global styling you need to create `pages/_app.jsx` and from there you can import all your global styles.

- The `/pages/api` routes are not severless function. If you want serverless functions it requires a bit more configuration

- `getStaticProps`, `getStaticPaths`, `getServerSideProps` are meant for pre-rendered pages

- `getStaticProps` will be executed within a node env. Nextjs evens removes it from the client side bundle!

  - Nextjs runs this function at **build time**
  - The results of this function are saved to a JSON file. They are then read and passed down via the hydration phase.

- `getStaticPaths` The ability to get paths for the static pages that need to be generated.

  - You would not use `getStaticPaths` without `getStaticProps`. The params result of `getStaticPaths` is accessible via
    get `getStaticProps`. This good for getting content from a dynamic url (See below).

  ```javascript
  // /pages/blog/:slug.js

  const IndexPage = () => {// jsx }
  export default IndexPage

  export async function getStaticPaths() {
    // get all the paths for your posts from an API
    // or file system
    const results = await fetch('/api/posts')
    const posts = await results.json()
    const paths = posts.map(post => ({params: {slug:
    post.slug}}))
    /*
    [
      {params: {slug: 'get-started-with-node'}},
      {params: {slug: 'top-frameworks'}}
    ]
    */
    return {paths}
  }

  export async function getStaticProps({ params }) {
    const res = await fetch(`/api/post/${params.slug}`)
    const post = await res.json()
    return {
      props: {post}
    }
  }
  ```

  - **Advanced tip:** Use fallback: true on your return object for getStaticPaths if you have a big site and don't want to statically prerender all items at once, and instead opt in to render some later at runtime via SSR.

- `getServerSideProps`: Called at runtime during every request

- When to use `getServerSideProps`? Almost never unless the data needs to be indexed by google with the data fetched?

- Nextjs only does SSR during developement mode. No pre-rendering stuff is done within dev mode (I think).
