// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import { useFetchUser } from '../lib/user'
import Layout from '../components/layout'
import { Button } from '@mui/material'



function SentencesCard({ sentences }) {

    return (
        <>
        <h1>Sentences to be evaluated</h1>

        <ul>
            {sentences.map((sentence) => (
                <li>{sentence.sentence}</li>
            ))}
        </ul>
        

        </>
    )
}

function Sentences({sentences}) {
  const { user, loading } = useFetchUser({ required: true })

  return (
    <Layout user={user} loading={loading}>
      {loading ? <>Loading...</> : <SentencesCard user={user} sentences={sentences}/>}
    </Layout>
  )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch(process.env.NEXT_PUBLIC_DB_FEED_PUBLIC_URL)
    const sentences = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        sentences
      },
    }
  }

export default Sentences
