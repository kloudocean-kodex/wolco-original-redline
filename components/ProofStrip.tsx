const proof = [
  ["01", "PERSONALISED PLAN", "A home construction plan shaped around your style, budget and needs."],
  ["02", "ONE-STOP JOURNEY", "Design, permits, building and finishing brought into one guided process."],
  ["03", "WOW STUDIO", "A dedicated selection experience for materials, finishes and interiors."],
  ["04", "AFTERCARE", "Discuss handover information, care and support for the home you are creating."],
];

export function ProofStrip() {
  return (
    <section className="proof-strip surface-black" aria-label="Why build with Wolco">
      <div className="proof-intro">
        <span className="eyebrow">01 / BUILT AROUND YOU</span>
        <p>Not features for the sake of features. A clearer, more personal way to build.</p>
      </div>
      <div className="proof-track">
        {proof.map(([n, title, copy]) => (
          <article className="proof-item" key={n}>
            <span className="proof-num">{n}</span>
            <h2>{title}</h2>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
