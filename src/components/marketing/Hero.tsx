import TrackedLink from "../analytics/TrackedLink";

export default function Hero() {
  return (
    <div className="heroBlock">
      <div className="heroPanel">
        <div className="badge">
          <span className="kbd">p2i.ai</span>
          <span>Applied AI Research • Apple Silicon • Performance Engineering</span>
        </div>

        <h1>Applied AI research that turns benchmarks into products.</h1>

        <p style={{ marginTop: 10 }}>
          I research and build AI systems with a focus on performance, reproducibility,
          and real-world constraints. My work spans LLM inference benchmarking, serverless
          model startup latency, Metal-accelerated attention kernels, and large-scale 3D
          rendering on Apple Silicon. Power2Idea AI is where this research is published and
          shaped into production-ready tools and products.
        </p>

        <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
          <TrackedLink
            href="/research"
            className="btn"
            event={{ event: "cta_click", location: "hero", target: "products", label: "Explore products" }}
          > Explore products</TrackedLink>
          <TrackedLink
            href="/research"
            className="btn"
            event={{ event: "cta_click", location: "hero", target: "research", label: "Explore research" }}
          >Explore research</TrackedLink>
          <TrackedLink
            href="/research"
            className="btn"
            event={{ event: "cta_click", location: "hero", target: "notes", label: "Explore notes" }}
          >Read notes</TrackedLink>

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