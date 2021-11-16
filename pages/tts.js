// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import { useFetchUser } from '../lib/user'
import Layout from '../components/layout'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';

function TtsCard({ user }) {
  return (
    <>
      <h1>Enter a Luganda sentence below</h1>

      <Box sx={{ mx: "auto", width: 500 }}>
        <TextField fullWidth label="sentence" id="sentence" />
      </Box>

      <Box sx={{ paddingTop: 2 }}>
        
      </Box>

      <Box sx={{ mx: "auto", width: 200 }}>
      <ButtonGroup disableElevation variant="contained">
        <Button type="submit" value="Create" >Generate</Button>
      </ButtonGroup>
      </Box>

      
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
