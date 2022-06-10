import { JobBoardListings } from 'src/components/JobBoardListings';
import { Container, Typography } from '@mui/material';

const Home = () => (
  <Container maxWidth='lg'>
    <Typography>
      A list of companies hiring minimal experience developer roles in Canada.
    </Typography>
    <JobBoardListings />
  </Container>
);

export default Home;
