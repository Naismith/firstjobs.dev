import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>FirstJobs.dev</h1>
      <h2>
        An aggregation of companies looking to hire first workers with no
        experience required.
      </h2>
      <iframe
        title="airtable list"
        class="airtable-embed"
        src="https://airtable.com/embed/shrwgDb2sjP34pODp?backgroundColor=purple"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="533"
      ></iframe>
    </div>
  );
}
