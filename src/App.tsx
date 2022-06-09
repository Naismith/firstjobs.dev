import "./styles.css";
import { JobBoardListings } from "./components/JobBoardListings";
import { Container } from "@mui/material";
import TopNav from "./components/TopNav";
import Modal from "./components/Modal";

export default function App() {
  return (
    <div className="layout">
      <TopNav />
      {/* <div className='header'>Header</div> */}

      <main className="main">
        <Container maxWidth="lg">
          {/* <h1>FirstJobs.dev</h1> */}
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
}
