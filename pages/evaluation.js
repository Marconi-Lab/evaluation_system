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
import prisma from '../lib/prisma'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';



function EvaluationCard({ user, sentences, data, data2, data_two}) {

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  const determine = getRandomInt(1,10)
  //const models_to_use = import('../models.json')
  const verify = data2
  const [email, setEmail] = useState('')
  //const [indexValue, setIndexValue] = useState(0)


  const [dataz, setDataz] = useState('')

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {

      let email2 = user.name

      const body_cont = { email2 }

      const response = await fetch("http://localhost:3000/api/checker", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body_cont),
      })

      //const response = await fetch('http://localhost:3000/api/feed');

      const json = await response.json();

      var gesa = JSON.stringify(json)

      // set state with the result
      setDataz(gesa);

    }
  
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [])


  var g = dataz
  var x = 0
  var determine_rand = 0
  for (let i = 0; i < data.length; i++) {
    //var sector = user.email
    var gheto = data[i].name
    if(gheto==user.nickname){
      const sentences_stop = data[i].evaluated_sentences_no
      
      const tess = JSON.stringify(data_two)
      var b = `${sentences_stop}`
      if(b !== undefined){
        var x = Number(b)
      }
      //const sentences_stop_d = data[i].evaluation_db_table
      
      //setIndexValue(x) 
    }
  }
  var iter = x
  var results = [];
  while(iter < 10){
    var searchField = "sentences_db_tableId";
    var determine_rand = getRandomInt(1,10)
    var searchVal = determine_rand;
    for (let i=0 ; i < data_two.length ; i++)
    {
        if (data_two[i][searchField] == searchVal) {
            results.push(JSON.stringify(data_two[i][searchField]));
        }
    }
    var checks = results.includes(determine_rand.toString());
    if(checks === false){
      break;
    }
    iter ++
  }
  
  var results_ = results.toString()

  const [indexValue, setIndexValue] = useState(x)
  const [name, setName] = useState('')
  const [sentence, setSentence] = useState(sentences[determine_rand].sentence)
  const [metric, setMetric] = useState(1)
  const [comment, setComment] = useState('')
  const [ms_time_on_start, setMs_time_on_start] = useState(Date.now())
  const [model, setModel] = useState('')
  const [sentence2, setSentence2] = useState("/audios/"+determine_rand+".wav")

  // An input useRef will help to manage the audio whenever a user types in a new sentence
  const inputRef = useRef()

  // This function handles the sentence variable state change and also with an inputRef churns the audio output
  const setURL = (value) => {
    setSentence(value)
    const urlappend2 = "/audios/"+[indexValue+1]+".wav"
    inputRef.current.src = urlappend2
    setSentence2(urlappend2)
  }

  /* 
      name = user.nickname
      email = user.name
      model = "v1"
      const body = { name, email, sentence, metric, comment, model }
      await fetch(process.env.NEXT_PUBLIC_DB_PUBLIC_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
  */

 
  const submitData = async e => {
    e.preventDefault()
    try {
      let ms_time_on_submit = Date.now();
      let evaluation_time = (ms_time_on_submit - ms_time_on_start)/1000
      name = user.nickname
      email = user.name
      model = 1
      let sentence_num = indexValue + 1
      let other_body = { sentence }
      //let response1 = await fetch('http://34.132.72.167:5005/api/evalstats?text=Wandiika')
      /* let response = await fetch("/api/stats", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(other_body),
      }) */
      // let sentence_info = await response.json();
      //let sentence_info = JSON.stringify(sentence_info1)
      const body = { name, email, sentence, metric, comment, model, evaluation_time, sentence_num}
      // let body = Object.assign(body1, sentence_info)
      await fetch(process.env.NEXT_PUBLIC_DB_PUBLIC_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      setIndexValue(indexValue+1)
      setURL(sentences[indexValue+1].sentence)
      setComment('')
      setMs_time_on_start(Date.now())
      // await Router.push('/')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <Typography variant="h4" component="div" gutterBottom>
          Evaluate
      </Typography>

      <div>
        <p>Welcome {user.nickname}, we cannot wait to see you start evaluating our models {determine_rand} {results_} {checks.toString()} {g}</p>


        {indexValue < 9 &&
          <>
            <Card sx={{ minWidth: 275, bgcolor: 'text.primary', color: 'background.paper' }}> 
              <CardContent>

              <Typography variant="h5" component="div" gutterBottom>
                {sentence}
              </Typography>

              </CardContent>

            </Card>

            
            
            {
              // This is the beginning of the grid side by side layout
            }

            <Card sx={{ minWidth: 275 }}> 
              <CardContent>

              <div align="center">
                  <audio ref={inputRef} controls align="center">
                    <source src={sentence2} />
                  </audio>
              </div> 

              </CardContent>

            </Card>

            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                                 
                          
                    <p>Use the buttons below to rate the audio</p>
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
          </>
        }

        {indexValue > 8 &&
          <>
              <Typography variant="h2" component="div" gutterBottom>
                Thank you for this, your submissions have been noted.
              </Typography>
          </>
        }
         
        
      </div>
    </>
  )
}

function Evaluation({ sentences, data, data2, data_two}) {
  const { user, loading } = useFetchUser({ required: true })

  return (
    <Layout user={user} loading={loading}>
      {loading ? <>Loading...</> : <EvaluationCard user={user} sentences={sentences} data={data} data2={data2} data_two={data_two}/>}
    </Layout>
  )
}

export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  //const res = await fetch(process.env.NEXT_PUBLIC_DB_FEED_PUBLIC_URL)
  //const posts = await res.json()
  const res = await prisma.sentences_db_table.findMany()
  const res1 = JSON.stringify(res)
  const sentences = JSON.parse(res1)

  const data_res = await prisma.individuals_data_db_table.findMany()
  const res1_data = JSON.stringify(data_res)
  const data = JSON.parse(res1_data)

  const res2 = await fetch('http://localhost:3000/api/get_models')
  const res1_data2 = await JSON.stringify(res2)
  const data2 = await JSON.parse(res1_data2)
  //const data2 = JSON.stringify(data28)


  const data_res_two = await prisma.evaluation_db_table.findMany({
    where: { individuals_data_db_table: {
      email: 'abrahamkakooza@gmail.com' }
    }
  })
  const res1_data_two = JSON.stringify(data_res_two)
  const data_two = JSON.parse(res1_data_two)




  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      sentences, data, data2, data_two
    },
  }
}



export default Evaluation
