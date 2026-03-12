import Link from "next/link"

const Blog = () => {
   return <>
      <h1>Blog Page</h1>
      <Link href='blog/post-1'>Post 1</Link>
      <Link href='blog/post-2'>Post 2</Link>
      <Link href='blog/post-3'>Post 3</Link>
   </>
}

export default Blog