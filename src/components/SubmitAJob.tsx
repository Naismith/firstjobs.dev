import { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

export const SubmitAJob = () => {
  const [height, setHeight] = useState("500px");
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
        seamless
        style={{
          border: "none",
          minHeight: "700px",
        }}
        onLoad={(test) => {
          setLoading(false);
          //   console.log(test.currentTarget.contentDocument?.body.scrollHeight);
          //   console.log(test.currentTarget.contentWindow);
        }}
        hidden={loading}
      />
    </>
  );
};
