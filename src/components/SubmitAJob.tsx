import { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

export const SubmitAJob = () => {
  const [loading, setLoading] = useState(true);

  const hideSpinner = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : null}
      <iframe
        title="Submit Job AirTable Form"
        className="airtable-embed"
        src="https://airtable.com/embed/shruVtGUmrM6Y3GNI?backgroundColor=purple"
        width="100%"
        height="533"
        onLoad={hideSpinner}
        hidden={loading}
      ></iframe>
    </>
  );
};
