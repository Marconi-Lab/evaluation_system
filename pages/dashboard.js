import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import prisma from '../lib/prisma'
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function About({ average, average_rtf, total_count, evaluators }) {
  const { user, loading } = useFetchUser({ required: true })

  function createData(Model_name, MOS, RTF, sentences) {
    return { Model_name, MOS, RTF, sentences};
  }

  const single_mos = { average }

  const rows = [
    createData('v1', single_mos[1]),
  ];

  return (
    <Layout user={user} loading={loading}>
      <Typography variant="h2" component="div" gutterBottom>
          Dashboard
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Model Version</TableCell>
              <TableCell align="center">MOS</TableCell>
              <TableCell align="center">RTF</TableCell>
              <TableCell align="center">Accepted Submissions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.Model_name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Typography variant="overline" display="block" gutterBottom>
                    v1
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="overline" display="block" gutterBottom>
                    { average }
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="overline" display="block" gutterBottom>
                    { average_rtf }
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="overline" display="block" gutterBottom>
                    { total_count }
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h6" component="div" gutterBottom>
          From { evaluators } evaluator(s)  
      </Typography>


    </Layout>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  //const res = await fetch(process.env.NEXT_PUBLIC_DB_FEED_PUBLIC_URL)
  //const posts = await res.json()

  const resp = await prisma.evaluation_db_table.aggregate({
    _avg: {
      rating_no: true,
      rtf: true,
    },
    _count:{
      rating_no: true,
    },
    where: {
      acceptance_tag: true,
    },
  })

  const res_c = await prisma.individuals_data_db_table.aggregate({
    _count:{
      name: true,
    },
  })

  //console.log('Average age:' + aggregations._avg.age)
  const res1 = JSON.stringify(resp._avg.rating_no)
  const average = JSON.parse(res1)

  const res1_rtf = JSON.stringify(resp._avg.rtf)
  const average_rtf = JSON.parse(res1_rtf)

  const res1_count = JSON.stringify(resp._count.rating_no)
  const total_count = JSON.parse(res1_count)

  const res1_eval = JSON.stringify(res_c._count.name)
  const evaluators = JSON.parse(res1_eval)

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      average, average_rtf, total_count, evaluators
    },
  }
}


export default About
