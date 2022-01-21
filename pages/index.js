import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(rating, quality, distortion) {
  return { rating, quality, distortion};
}

const rows = [
  createData(5, 'Excellent', 'Imperceptible'),
  createData(4, 'Good', 'Just perceptible, but not annoying'),
  createData(3, 'Fair', 'Perceptible and slightly annoying'),
  createData(2, 'Poor', 'Annoying, but not objectionable'),
  createData(1, 'Bad', 'Very annoying and objectionable'),
];

function Home() {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <h2>Luganda Text-to-Speech(TTS), model evaluation</h2>

      {loading && <p>Loading login info...</p>}

      {!loading && !user && (
        <>
          <p>The table below will guide you as you rate the various sentences</p>
          
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 450 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Rating</TableCell>
                  <TableCell align="left">Quality</TableCell>
                  <TableCell align="left">Distortion</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.rating}
                    </TableCell>
                    <TableCell align="left">{row.quality}</TableCell>
                    <TableCell align="left">{row.distortion}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <p>
            Once you have logged in you should be able to click in{' '}
            <i>Evaluate</i>,<i>TTS</i>  and <i>Logout</i>
          </p>
        </>
      )}

      {user && (
        <>
          {/* <img src={user.picture} alt="user picture" /> */}
          <p>nickname: {user.nickname}</p>
          <p>name: {user.name}</p>
        </>
      )}
    </Layout>
  )
}

export default Home
