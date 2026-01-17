import TrackedLink from "../analytics/TrackedLink";

export default function Hero() {
  return (
    <div className="heroBlock">
      <div className="heroPanel">
        <div className="badge">
          <span className="kbd">p2i.ai</span>
          <span>GitHub Actions  Policy-to-code  Deterministic AI</span>
        </div>

        <h1>AI-powered GitHub Actions that turn policy into PR checks.</h1>

        <p style={{ marginTop: 10 }}>
          I am Krishna, a solo engineer. I build GitHub Actions that remove recurring engineering friction
          by converting rules and policies into deterministic, AST-backed PR checks with clean reports.
          I run three streams: Products (the tools), Research (R&amp;D that validates new checks), and Notes
          (short build logs as things ship). Language-agnostic by design: Swift today, Rust/TypeScript next.
        </p>

        <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
          <TrackedLink
            href="/products"
            className="btn"
            event={{ event: "cta_click", location: "hero", target: "products", label: "Explore products" }}
          >
            Explore products
          </TrackedLink>

          <TrackedLink
            href="/research"
            className="btn"
            event={{ event: "cta_click", location: "hero", target: "research", label: "Explore research" }}
          >
            Explore research
          </TrackedLink>

          <TrackedLink
            href="/notes"
            className="btn"
            event={{ event: "cta_click", location: "hero", target: "notes", label: "Read notes" }}
          >
            Read notes
          </TrackedLink>

          <a
            className="btn btnSecondary"
            href="https://patents.google.com/?inventor=Krishna+Srinivasmurthy"
            target="_blank"
            rel="noreferrer"
          >
            Patents
          </a>
        </div>
      </div>
    </div>
  );
}