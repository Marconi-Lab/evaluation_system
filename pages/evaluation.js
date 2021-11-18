// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import { useFetchUser } from '../lib/user'
import Layout from '../components/layout'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import { spacing } from '@mui/system';
import Router, { useRouter } from 'next/router'
import React, { useState } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Waveform from "./Waveform1";
import PlayList from "./PlayList";

const tracks = [
  {
    id: 0,
    title: "Brahms: St Anthony Chorale - Theme, Two Pianos Op.56b",
    url:
      "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav"
  },
  {
    id: 1,
    title: "Franz Schubert's Ständchen - Voice (Clarinet) & Piano",
    url:
      "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav"
  }
];


const likeAudio = new Audio("http://[::1]:5002/api/tts?text=Kisaana buli muntu asseeko nnyo omwoyo okutuukiriza ekiragiro kino obulungi.");

const playSound = audioFile => {
  audioFile.play();
}

function valuetext(value) {
  return `${value}°C`;
}

function EvaluationCard({ user }) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [sentence, setSentence] = useState("Akakiiko kano kajja kufunanga ebiteeso okuva eri abalagaanyi ebikwata ku mirimu gy'enkulaakulana.")
  const [metric, setMetric] = useState(1.5)
  const [comment, setComment] = useState('')
  const [model, setModel] = useState('')
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);

  
  const submitData = async e => {
    e.preventDefault()
    try {
      name = user.nickname
      email = user.name
      model = "v1"
      const body = { name, email, sentence, metric, comment, model }
      await fetch(`http://localhost:3000/api/post`, {
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
      <h1>Evaluate</h1>

      <div>
      <p>Welcome {user.nickname}, we cannot wait to see you start evaluating our models</p>
      <Button variant="contained">Sentence</Button> 
      <p>{sentence}</p>

      <Button
          onClick={() => playSound(likeAudio)}
          variant="contained"
          color="primary"
      >
          <PlayArrowIcon />
      </Button>


      <div className="App">
        <Waveform url={selectedTrack.url} />
        <PlayList
          tracks={tracks}
          selectedTrack={selectedTrack}
          setSelectedTrack={setSelectedTrack}
        />
      </div>

      
      <p>Use the slider below to rate the sentence from 0 to 5</p>
      <ul>
        <li>0 is a very bad generated audio clip</li>
        <li>5 is a very good, close to natural speaking audio clip</li>
      </ul>
      <Box sx={{ mx: "auto", width: 500 }}>
        <Slider
          aria-label="Temperature"
          defaultValue={1.5}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={0.5}
          marks
          min={0}
          max={5}
          onChange={e => setMetric(e.target.value)}
          value={metric}
        />
      </Box>

      <Box sx={{ paddingTop: 2 }}>
        
      </Box>


      <form
          onSubmit={submitData}>
      <Box sx={{ mx: "auto", width: 500 }}>
        <TextField fullWidth label="comment" id="comment" onChange={e => setComment(e.target.value)} value={comment}/>
      </Box>

      

      <Box sx={{ paddingTop: 2 }}>
        
      </Box>

      <Box sx={{ mx: "auto", width: 0 }}>
      <ButtonGroup disableElevation variant="contained">
        <Button type="submit" value="Create" >Submit</Button>
        <Button>Next</Button>
      </ButtonGroup>
      </Box>

      </form>


        
        
        
      </div>
    </>
  )
}

function Evaluation() {
  const { user, loading } = useFetchUser({ required: true })

  return (
    <Layout user={user} loading={loading}>
      {loading ? <>Loading...</> : <EvaluationCard user={user} />}
    </Layout>
  )
}

export default Evaluation
