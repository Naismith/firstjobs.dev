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
        src="https://airtable.com/embed/shrQX0lt47OGRQ3nt?backgroundColor=purple&viewControls=on"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="533"
        // style="background: transparent; border: 1px solid #ccc;"
      ></iframe>
    </div>
  );
}
