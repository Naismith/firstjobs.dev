import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function TopNav() {
  return (
    <Box mb={2}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FirstJobs.dev
          </Typography>
          <Button as={Link} to="/share" color="inherit" variant="link">
            SUBMIT A JOB
          </Button>
          {/* <Button color="inherit">SUBSCRIBE</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
