import { SubmitAJob } from 'src/components/SubmitAJob';
import { Container } from '@mui/material';
import TopNav from 'src/components/TopNav';
import Footer from '../components/Footer';

const Share = () => (
  <div className='layout'>
    <TopNav />
    <main className='main'>
      <Container maxWidth='lg'>
        <SubmitAJob />
      </Container>
    </main>
    <Footer />{' '}
  </div>
);

export default Share;
