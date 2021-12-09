// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import { useFetchUser } from '../lib/user'
import Layout from '../components/layout'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import React, { useState, useEffect, useRef } from 'react'

// This is to handle the generate button and prevent the auto event change 
const submitMoreData = async e => {
    e.preventDefault()
}

// This is the main function to work this component out
function TtsCard({ user }) {

  // These states are used to handle the sentence being typed
  const [sentence, setSentence] = useState("Wandika wanno")
  const [sentence2, setSentence2] = useState("http://[::1]:5002/api/tts?text=Wandika wanno")

  // An input useRef will help to manage the audio whenever a user types in a new sentence
  const inputRef = useRef()

  // This function handles the sentence variable state change and also with an inputRef churns the audio output
  const setURL = (value) => {
    setSentence(value)
    const urlappend2 = "http://[::1]:5002/api/tts?text=" + value
    inputRef.current.src = urlappend2
    setSentence2(urlappend2)
  }

  // This is the initial Audio component value, will change after the generate button is clicked
  const urlappend = "http://[::1]:5002/api/tts?text="

  // Basic appending of a sentence to the above value
  var newUrl = urlappend + sentence

  // This will help auto play the audio when one clicks the generate button, function is below
  const likeAudio = new Audio(newUrl);
  const playSound = audioFile => {
    audioFile.play();
  }
  
  return (
    <>
      <h1>Enter a Luganda sentence  here </h1>

      <form
          onSubmit={submitMoreData}>
      {
        // One can type in the sentence they want here to be translated to an audio
      }
      <Box sx={{ mx: "auto", width: 500 }}>
        <TextField fullWidth label="sentence" id="sentence" onChange={e => setURL(e.target.value)} value={sentence} />
      </Box>
      
      {
        // Some spacing to align out the components
      }
      <Box sx={{ paddingTop: 2 }}>
        
      </Box>
      {
        // Generate Button 
      }
      <Box sx={{ mx: "auto", width: 200 }}>
      <ButtonGroup disableElevation variant="contained">
          <Button type="submit" value="Create" onClick={() => playSound(likeAudio)} >Generate</Button>
      </ButtonGroup>
      
      </Box>

      <Box sx={{ paddingTop: 2 }}>
        
      </Box>

      <Box sx={{ mx: "auto", width: 400 }}>
      {
        // The audio component with the inputRef
      }
      <audio ref={inputRef} controls>
        <source src={sentence2} />
      </audio>
      {
        // This is a sentence to double check your input sentence
      }
      <li>{sentence2}</li>
      
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
