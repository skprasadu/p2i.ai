import Link from "next/link";

export default function BucketCtas(props: { variant?: "primary" | "secondary" }) {
    const variant = props.variant ?? "primary";

    const primaryClass = variant === "primary" ? "btn" : "btn btnSecondary";

    return (
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link className={primaryClass} href="/research">Explore research</Link>
            <Link className="btn btnSecondary" href="/products">Explore products</Link>
            <Link className="btn btnSecondary" href="/notes">Read notes</Link>
        </div>
    );
}