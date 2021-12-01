import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'

function Home() {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <h2>Luganda Text-to-Speech(TTS) model evaluation</h2>

      {loading && <p>Loading login info...</p>}

      {!loading && !user && (
        <>
          <p>
            In order to evaluate some of our models please, click  <i>Login</i>
          </p>
          <p>
            Once you have logged in you should be able to click in{' '}
            <i>Profile</i> and <i>Logout</i>
          </p>
        </>
      )}

      {user && (
        <>
          <h4>Rendered user info on the client</h4>
          {/* <img src={user.picture} alt="user picture" /> */}
          <p>nickname: {user.nickname}</p>
          <p>name: {user.name}</p>
        </>
      )}
    </Layout>
  )
}

export default Home
