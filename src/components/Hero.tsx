import Link from "next/link";

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
          rendering on Apple Silicon. P2I.ai is where this research is published and
          shaped into production-ready tools and products.
        </p>

        <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
          <Link className="btn" href="/research">Explore research</Link>
          <Link className="btn btnSecondary" href="/products">Explore products</Link>
          <Link className="btn btnSecondary" href="/notes">Read notes</Link>

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