import { SubmitAJob } from "src/components/SubmitAJob";
import { Container } from "@mui/material";
import TopNav from "src/components/TopNav";
import Modal from "src/components/Modal";

const Share = () => (
  <div className="layout">
    <TopNav />
    <main className="main">
      <Container maxWidth="lg">
        <SubmitAJob />
      </Container>
    </main>
    <footer className="footer">Footer</footer>
  </div>
);

export default Share;
