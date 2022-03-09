import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import prisma from '../lib/prisma'

function About({ average }) {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <h1>Dashboard</h1>
      <p>
        This is the Dashboard Page 
      </p>


      <p>
        Model v1 MOS
      </p>

      <p>
       { average }
      </p>
    </Layout>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  //const res = await fetch(process.env.NEXT_PUBLIC_DB_FEED_PUBLIC_URL)
  //const posts = await res.json()
  const res = await prisma.evaluation_db_table.aggregate({
    _avg: {
      rating_no: true,
    },
  })

  //console.log('Average age:' + aggregations._avg.age)

  const res1 = JSON.stringify(res._avg.rating_no)
  const average = JSON.parse(res1)

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      average
    },
  }
}


export default About
