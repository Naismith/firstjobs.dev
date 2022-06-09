import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <footer className='footer'>
      <Box mt={2} textAlign='center'>
        <Typography>
          Built by
          <a
            href='https://www.linkedin.com/in/chris-naismith/'
            target='_blank'
            rel='noreferrer'
          >
            🌲Chris Naismith
          </a>{' '}
          &{' '}
          <a
            href='https://www.linkedin.com/in/andrewtclarkson/'
            target='_blank'
            rel='noreferrer'
          >
            Andrew Clarkson
          </a>
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
