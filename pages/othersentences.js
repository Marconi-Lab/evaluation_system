// posts will be populated at build time by getStaticProps()
import prisma from '../lib/prisma'
function Blog({ posts }) {
    return (
      <>
      <ul>
        {posts.map((post) => (
          <li key={post.sentence}>{post.sentence}</li>
        ))}
      </ul>
      </>
    )
  }
  
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries. See the "Technical details" section.
  export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    // const res = await fetch(process.env.NEXT_PUBLIC_DB_FEED_PUBLIC_URL)
    const res = await prisma.sentences.findMany()
    const res1 = JSON.stringify(res)
    const posts = JSON.parse(res1)
    // console.log(JSON.stringify(posts))
    //const posts = await res.json()
    //const prisma = new PrismaClient()
    //const posts = await prisma.sentences.findMany()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts
      },
    }
  }
  
  export default Blog