const entries = [
  {
    date: "FIRST LIGHT",
    place: "OUTLOOK",
    stage: "ROOM TO BREATHE",
    note: "Consider where the morning begins. The garden you look towards. The way light travels from one room into the next.",
  },
  {
    date: "EVERYDAY",
    place: "BELONGING",
    stage: "COME TOGETHER",
    note: "A kitchen for conversation. A quieter place to retreat. Start with the moments you want your home to make room for.",
  },
];

export function BuildJournal() {
  return (
    <section className="build-journal surface-ivory" aria-labelledby="journal-title">
      <div className="journal-head">
        <div className="eyebrow row-between">
          <span>06 / LIFE IN THE DETAILS</span>
          <span>TWO THOUGHTS FOR YOUR BRIEF</span>
        </div>
        <h2 id="journal-title" className="display-lg">
          From an idea<br />
          <em>to belonging.</em>
        </h2>
      </div>

      <div className="journal-list">
        {entries.map((entry, i) => (
          <article className="journal-entry" key={entry.place}>
            <div className="journal-index">0{i + 1}</div>
            <div className="journal-date">{entry.date}</div>
            <div className="journal-place">{entry.place}</div>
            <div className="journal-stage">{entry.stage}</div>
            <p>{entry.note}</p>
          </article>
        ))}
      </div>

      <div className="journal-foot">
        <span className="journal-line" aria-hidden="true" />
        <p>LIGHT. PROPORTION. YOUR OWN WAY OF LIVING.</p>
        <a href="#start" className="text-link">Talk about your build</a>
      </div>
    </section>
  );
}
