import "./styles.css";
import { JobBoardListings } from "./components/JobBoardListings";

export default function App() {
  return (
    <div className="layout">
      <div className="header">Header</div>
      <main className="main">
        <h1>FirstJobs.dev</h1>
        <h2>
          An aggregation of companies looking to hire first workers with no
          experience required.
        </h2>
        <JobBoardListings />
      </main>
      <footer className="footer">Footer</footer>
    </div>
  );
}