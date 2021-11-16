// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import { useFetchUser } from '../lib/user'
import Layout from '../components/layout'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';

function TtsCard({ user }) {
  return (
    <>
      <h1>Enter a Luganda sentence below</h1>

      
    </>
  )
}

function Tts() {
  const { user, loading } = useFetchUser({ required: true })

  return (
    <Layout user={user} loading={loading}>
      {loading ? <>Loading...</> : <TtsCard user={user} />}
    </Layout>
  )
}

export default Tts
