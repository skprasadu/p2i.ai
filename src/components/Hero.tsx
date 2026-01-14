import Scene from "./Scene";

export default function Hero() {
  return (
    <div className="heroGrid">
      <div className="heroPanel">
        <div className="badge">
          <span className="kbd">p2i.ai</span>
          <span>Visual engineering portfolio</span>
        </div>

        <h1>Builds that feel inevitable.</h1>

        <p style={{ marginTop: 10 }}>
          I ship production-grade systems — but I present them like a product.
          This site is a living demo: fast, indexable, and visually sharp.
        </p>

        <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
          <a className="btn" href="/projects">View projects</a>
          <a className="btn btnSecondary" href="https://patents.google.com/?inventor=Krishna+Srinivasmurthy" target="_blank" rel="noreferrer">
            Patents
          </a>
        </div>

      </div>

      <div className="sceneStage" style={{ height: 360 }}>
        <Scene />
      </div>
    </div>
  );
}