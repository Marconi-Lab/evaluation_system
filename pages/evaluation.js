// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import { useFetchUser } from '../lib/user'
import Layout from '../components/layout'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Router, { useRouter } from 'next/router'
import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';



function EvaluationCard({ user }) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [sentence, setSentence] = useState("Akakiiko kano kajja kufunanga ebiteeso okuva eri abalagaanyi ebikwata ku mirimu gy'enkulaakulana.")
  const [metric, setMetric] = useState(1)
  const [comment, setComment] = useState('')
  const [model, setModel] = useState('')

  
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

      <audio controls>
        <source src="http://127.0.0.1:5002/api/tts?text=Kisaana buli muntu asseeko nnyo omwoyo okutuukiriza ekiragiro kino obulungi." />
      </audio>

     
      <p>Use the radio buttons below to rate the sentence's naturalness</p>
      <ul>
        <li>1 is a very bad generated audio clip</li>
        <li>5 is a very good, close to natural speaking audio clip</li>
      </ul>
      <Box sx={{ mx: "auto", width: 500 }}>
        <RadioGroup row aria-label="top" name="top" defaultValue="3" onChange={e => setMetric(parseInt(e.target.value))} value={metric}>
          <FormControlLabel
            value="1"
            control={<Radio />}
            label="1"
            labelPlacement="top"
          />
          <FormControlLabel
            value="2"
            control={<Radio />}
            label="2"
            labelPlacement="top"
          />
          <FormControlLabel
            value="3"
            control={<Radio />}
            label="3"
            labelPlacement="top"
          />
          <FormControlLabel
            value="4"
            control={<Radio />}
            label="4"
            labelPlacement="top"
          />
          <FormControlLabel
            value="5"
            control={<Radio />}
            label="5"
            labelPlacement="top"
          />
        </RadioGroup>
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
