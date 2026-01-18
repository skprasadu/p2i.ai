import TrackedLink from "../analytics/TrackedLink";

export default function Hero() {
  return (
    <div className="heroBlock">
      <div className="heroPanel">
        <div className="badge">
          <span className="kbd">Power2Idea AI</span>
          <span>GitHub Actions - Policy-to-code - Deterministic</span>
        </div>

        <h1>Code Policies, Enforced Early</h1>

        <p style={{ marginTop: 10 }}>
          Deterministic policy enforcement via GitHub Actions for modern codebases.
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
        </div>
      </div>
    </div>
  );
}