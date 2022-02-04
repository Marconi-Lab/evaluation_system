import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'

function About() {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <h1>Dashboard</h1>
      <p>
        This is the Dashboard Page
      </p>
    </Layout>
  )
}

export default About
