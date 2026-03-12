import Link from "next/link"

const Post = async ({params}) => {
   const {slug} = await params
   console.log(slug);
   
   return <>
      <h1>Post Page</h1>
      <p>This is the {slug}</p>
      <Link href='/blog'>Back</Link>
   </>
}

export default Post