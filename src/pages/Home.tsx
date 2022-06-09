import { JobBoardListings } from "src/components/JobBoardListings";
import { Container } from "@mui/material";
import TopNav from "src/components/TopNav";
import Modal from "src/components/Modal";

const Home = () => (
  <div className="layout">
    <TopNav />
    <main className="main">
      <Container maxWidth="lg">
        <h2>
          An aggregation of companies looking to hire first workers with no
          experience required.
        </h2>
        <Modal />
        <JobBoardListings />
      </Container>
    </main>
    <footer className="footer">Footer</footer>
  </div>
);

export default Home;
