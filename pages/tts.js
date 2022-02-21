// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import { useFetchUser } from '../lib/user'
import Layout from '../components/layout'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Router, { useRouter } from 'next/router'
import React, { useState, useEffect, useRef } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';



function TtsCard({ user }) {

  // These states are used to handle the sentence being typed

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [metric, setMetric] = useState(1)
  const [comment, setComment] = useState('')
  const [model, setModel] = useState('')
  const [sentence, setSentence] = useState("Wandika wanno")
  const [sentence2, setSentence2] = useState("http://34.132.72.167:5002/api/tts?text=Wandika wanno")

  // An input useRef will help to manage the audio whenever a user types in a new sentence
  const inputRef = useRef()

  // This function handles the sentence variable state change and also with an inputRef churns the audio output
  const setURL = (value) => {
    setSentence(value)
    const urlappend2 = "http://34.132.72.167:5002/api/tts?text=" + value
    inputRef.current.src = urlappend2
    setSentence2(urlappend2)
  }

  // This is the initial Audio component value, will change after the generate button is clicked
  const urlappend = process.env.NEXT_MODEL_V1_IP

  // Basic appending of a sentence to the above value
  var newUrl = urlappend + sentence

  // This will help auto play the audio when one clicks the generate button, function is below
  const likeAudio = new Audio(newUrl);
  const playSound = audioFile => {
    audioFile.play();
  }

 
  const submitData = async e => {
    e.preventDefault()
    try {
      name = user.nickname
      email = user.name
      model = 1
      let inference_time = 1.5
      let rtf = 1.5
      let wav_length_seconds = 1.5
      let evaluation_time = 2
      const body = { name, email, sentence, metric, comment, model, inference_time, rtf, wav_length_seconds, evaluation_time}
      await fetch(process.env.NEXT_PUBLIC_DB_PUBLIC_URL_USER_SENTENCE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      await Router.push('/')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <h1>Enter a Luganda sentence  below and rate it </h1>

      <div>
            <Box >
                <TextField fullWidth label="sentence" id="sentence" onChange={e => setURL(e.target.value)} value={sentence} />
            </Box>
        
              {
                // Some spacing to align out the components
              }
              <Box sx={{ paddingTop: 2 }}>
                
              </Box>

              <Box sx={{ mx: "auto", width: 200 }}>
                <ButtonGroup disableElevation variant="contained">
                    <Button type="submit" value="Create" onClick={() => playSound(likeAudio)} >Generate</Button>
                </ButtonGroup>
              
              </Box>

              <Box sx={{ paddingTop: 4 }}>
                
              </Box>


        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ mx: "auto", width: 400 }}>
                {
                  // The audio component with the inputRef
                }
                <audio ref={inputRef} controls>
                  <source src={sentence2} />
                </audio>

                <p>Use the buttons below to rate the sentence</p>

              </Box>

                <Box sx={{ mx: "auto", width: 500 }}>
                  <RadioGroup row aria-label="top" name="top" defaultValue="3" onChange={e => setMetric(parseInt(e.target.value))} value={metric}>
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="1 (Bad)"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="2 (Poor)"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio />}
                      label="3 (Fair)"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="4"
                      control={<Radio />}
                      label="4 (Good)"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="5"
                      control={<Radio />}
                      label="5 (Excellent)"
                      labelPlacement="top"
                    />
                  </RadioGroup>
                </Box>

                <Box sx={{ paddingTop: 2 }}>
                  
                </Box>


                <form
                    onSubmit={submitData}>
                  <Box >
                    <TextField fullWidth label="comment" id="comment" onChange={e => setComment(e.target.value)} value={comment}/>
                  </Box>

                  

                  <Box sx={{ paddingTop: 2 }}>
                    
                  </Box>

                  <Box sx={{ mx: "auto", width: 0 }}>
                    <ButtonGroup disableElevation variant="contained">
                      <Button type="submit" value="Create" >Submit</Button>
                    </ButtonGroup>
                  </Box>
                </form>
            </Grid>
          </Grid>
        </Box>
         
        
      </div>
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
