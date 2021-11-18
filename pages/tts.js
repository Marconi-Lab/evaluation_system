// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import { useFetchUser } from '../lib/user'
import Layout from '../components/layout'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import React, { useState } from 'react'

const submitMoreData = async e => {
    e.preventDefault()
}
function TtsCard({ user }) {

  const [sentence, setSentence] = useState("")
  
  const urlappend = "http://[::1]:5002/api/tts?text="

  var newUrl = urlappend + sentence
  const likeAudio = new Audio(newUrl);

  const playSound = audioFile => {
    audioFile.play();
  }
  
  return (
    <>
      <h1>Enter a Luganda sentence below</h1>

      <form
          onSubmit={submitMoreData}>

      <Box sx={{ mx: "auto", width: 500 }}>
        <TextField fullWidth label="sentence" id="sentence" onChange={e => setSentence(e.target.value)} value={sentence} />
      </Box>

      <Box sx={{ paddingTop: 2 }}>
        
      </Box>

      <Box sx={{ mx: "auto", width: 200 }}>
      <ButtonGroup disableElevation variant="contained">
        <Button type="submit" value="Create" onClick={() => playSound(likeAudio)} >Generate</Button>
      </ButtonGroup>
      </Box>
      
      </form>
      
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
