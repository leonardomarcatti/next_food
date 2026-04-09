import Link from "next/link"

const NotFound = () => {
   return <main className="not-found">
      <h1>Not found</h1>
      <p>We couldn't find this page</p>
      <p>Click <Link href='/'>here</Link> to get to home page</p>
   </main>
}

export default NotFound