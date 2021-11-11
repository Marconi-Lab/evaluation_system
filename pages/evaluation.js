// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import { useFetchUser } from '../lib/user'
import Layout from '../components/layout'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';
import ButtonGroup from '@mui/material/ButtonGroup';

const muiTheme = createMuiTheme({});

function valuetext(value) {
  return `${value}°C`;
}

function EvaluationCard({ user }) {
  return (
    <>
      <h1>Evaluate</h1>

      <div>
      <p>Welcome {user.nickname}, we cannot wait to see you start evaluating our models</p>
      <Button variant="contained">Sentence</Button> 
      <p>Akakiiko kano kajja kufunanga ebiteeso okuva eri abalagaanyi ebikwata ku mirimu gy'enkulaakulana.</p>

      <Box sx={{ mx: "auto", width: 200 }}>
      <ThemeProvider theme={muiTheme}>
        <AudioPlayer
          width="58px"
          volume={false}
          displaySlider={false}
          src="https://trello.com/1/cards/614ca1edc70a4087a615f7b1/attachments/614ca22840acbc350039ddcb/download/output33_(1).wav"
        />
      </ThemeProvider>
      </Box>
      

      <p>Use the slider below to rate the sentence from 0 to 5</p>
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
        />
      </Box>

      <Box sx={{ mx: "auto", width: 0 }}>
      <ButtonGroup disableElevation variant="contained">
        <Button>Submit</Button>
        <Button>Next</Button>
      </ButtonGroup>
      </Box>
        
        
        
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
