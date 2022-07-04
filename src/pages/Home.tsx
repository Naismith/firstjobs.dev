import { JobBoardListings } from 'src/components/JobBoardListings';
import { Container, Typography } from '@mui/material';
import MailChimpForm from 'src/components/MailChimpForm';

const Home = () => (
  <Container maxWidth='lg'>
    <MailChimpForm />
    <Typography>
      A list of companies hiring minimal experience developer roles in Canada.
    </Typography>
    <JobBoardListings />
  </Container>
);

export default Home;
