export default function MermaidImage(props: {
  src: string;
  alt: string;
  caption?: string;
  code?: string;
}) {
  const { src, alt, caption, code } = props;

  return (
    <figure className="card" style={{ padding: 14 }}>
      <img src={src} alt={alt} style={{ width: "100%", height: "auto" }} loading="lazy" />
      {caption ? (
        <figcaption style={{ marginTop: 10, color: "var(--muted)", fontSize: 13 }}>
          {caption}
        </figcaption>
      ) : null}

      {/* LLM-friendly: include the source, but not noisy. */}
      {code ? (
        <details style={{ marginTop: 10 }}>
          <summary style={{ cursor: "pointer", color: "rgba(11,15,23,0.7)", fontWeight: 700 }}>
            Mermaid source
          </summary>
          <pre
            style={{
              marginTop: 10,
              padding: 12,
              overflowX: "auto",
              background: "rgba(15,23,42,0.04)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              fontSize: 13,
            }}
          >
{code}
          </pre>
        </details>
      ) : null}
    </figure>
  );
}