import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import Box from '@mui/material/Box';

export const JobBoardListings = () => {
  const [loading, setLoading] = useState(true);

  const hideSpinner = () => {
    setLoading(false);
  };
  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      ) : null}
      <iframe
        title='airtable list'
        className='airtable-embed'
        src='https://airtable.com/embed/shrwgDb2sjP34pODp?backgroundColor=purple'
        width='100%'
        height='533'
        onLoad={hideSpinner}
        hidden={loading}
      />
    </>
  );
};
