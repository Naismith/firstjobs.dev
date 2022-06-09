import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import Box from '@mui/material/Box';

export const SubmitAJob = () => {
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
        title='Submit Job AirTable Form'
        className='airtable-embed'
        src='https://airtable.com/embed/shruVtGUmrM6Y3GNI?backgroundColor=purple'
        width='100%'
        seamless
        style={{
          border: 'none',
          minHeight: '700px',
        }}
        onLoad={hideSpinner}
        hidden={loading}
      />
    </>
  );
};
