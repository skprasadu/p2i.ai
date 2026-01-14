export default function ContactSection() {
  return (
    <section id="contact" style={{ padding: "26px 0" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
        <h2 style={{ margin: 0, fontSize: 22, letterSpacing: "-0.02em" }}>Contact</h2>
      </div>

      <div className="card" style={{ marginTop: 12 }}>
        <p style={{ marginBottom: 12 }}>
          For collaboration or consulting, reach me here:
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a className="btn btnSecondary" href="mailto:krishna@p2i.ai">
            krishna@p2i.ai
          </a>

          <a
            className="btn btnSecondary"
            href="https://www.linkedin.com/in/krishnaprasad1"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            className="btn btnSecondary"
            href="https://github.com/skprasadu"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}