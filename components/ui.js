import Link from "next/link";
import art from "@/lib/art";
import { issues } from "@/lib/issues";

export function Art({ name, className = "" }) {
  return <div className={`art ${className}`} dangerouslySetInnerHTML={{ __html: art[name] }} />;
}

export function Button({ href, variant = "", children }) {
  return (
    <Link href={href} className={`btn ${variant}`}>
      {children}
    </Link>
  );
}

// A magazine cover. Text scales with the cover's own width (container units),
// so the same component works from 150px thumbnails to the 420px hero.
export function Cover({ n, className = "", tagline = true }) {
  const { title, edition, art: key } = issues[n - 1];
  const size = Math.min(10.5, 90 / (title.length * 0.5));
  return (
    <div className={`cover ${className}`}>
      <div className="cover-in">
        <div className="cover-row">
          <span>Offscreen Press</span>
          <span>No. {String(n).padStart(2, "0")}</span>
        </div>
        <div className="cover-title" style={{ fontSize: `${size.toFixed(2)}cqw` }}>
          {title}
        </div>
        <Art name={key} className="cover-art" />
        <div className="cover-row">
          <span>{edition}</span>
          {tagline && <span className="cover-tag">On paper. Off screen.</span>}
        </div>
      </div>
    </div>
  );
}

export function Heading({ label, title, as: Tag = "h2", light = false, max }) {
  return (
    <div className="heading">
      <p className={`label ${light ? "c-parch" : "c-terra"}`}>{label}</p>
      <Tag className="dl" style={max ? { maxWidth: max } : undefined}>
        {title}
      </Tag>
    </div>
  );
}

export function Spark() {
  return (
    <svg className="spark" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 0Q8 8 16 8Q8 8 8 16Q8 8 0 8Q8 8 8 0Z" fill="currentColor" />
    </svg>
  );
}

export function ClubBand() {
  return (
    <section className="section bg-blue">
      <div className="wrap narrow center">
        <p className="label c-parch">The Offscreen Club</p>
        <h2 className="dl">Meet your next paper adventure.</h2>
        <p className="em">
          Join the club and we’ll write to you when new editions land, with a few little surprises in between.
        </p>
        <Button href="/#club">Join the Offscreen Club</Button>
      </div>
    </section>
  );
}
