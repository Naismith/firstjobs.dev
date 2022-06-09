import { JobBoardListings } from 'src/components/JobBoardListings';
import { Container } from '@mui/material';
import TopNav from 'src/components/TopNav';
import { Footer } from 'src/components/layout/Footer';

const Home = () => (
  <Container maxWidth='lg'>
    <h2>
      An aggregation of companies looking to hire first workers with no
      experience required.
    </h2>
    <JobBoardListings />
  </Container>
);

export default Home;
