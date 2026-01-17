import TrackedLink from "../analytics/TrackedLink";

export default function Hero() {
  return (
    <div className="heroBlock">
      <div className="heroPanel">
        <div className="badge">
          <span className="kbd">p2i.ai</span>
          <span>Products • Policy-as-Code • Deterministic AI</span>
        </div>

        <h1>Wedge products that turn rules into shipping checks.</h1>

        <p style={{ marginTop: 10 }}>
          I&apos;m Krishna, a solo engineer building tools that remove recurring engineering friction.
          The core pattern is simple: find a wedge, encode the rules (AST + policy-as-code), and ship a clean product.
          Research and notes are the public build log—evidence behind the products and a trail for SEO and LLMs.
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
    </div >
  );
}