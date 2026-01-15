export default function Section(props: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ padding: "20px 0" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}>
        <h2 style={{ margin: 0, fontSize: 22, letterSpacing: "-0.02em" }}>{props.title}</h2>
      </div>
      <div style={{ marginTop: 12 }}>{props.children}</div>
    </section>
  );
}