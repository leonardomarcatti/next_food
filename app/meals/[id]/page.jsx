const Page = async ({ params }) => {
   const { id } = await params
   return <h1>My Post: {id}</h1>
}

export default Page