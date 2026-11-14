import Link from "next/link";
import { ClubBand, Cover, Heading } from "@/components/ui";
import { issues, issueNo } from "@/lib/issues";

export const metadata = {
  title: "The Offscreen Archive",
  description:
    "Every edition of Offscreen Press, past and upcoming: a growing library of illustrated paper worlds worth collecting.",
};

const collectible = [
  ["An issue number", "So your shelf always knows what comes next."],
  ["A one-off cover", "A new illustrated world on the front, every month."],
  ["Its own colours", "Each theme brings a palette of its own."],
  ["A collectible stamp", "A small mark of the edition, printed inside."],
  ["A publisher’s note", "A few words on why this world, and why now."],
];

function Edition({ issue }) {
  return (
    <>
      <Cover n={issue.n} />
      <div className="meta">
        <span className="label c-terra">{issueNo(issue.n)}</span>
        <span className="pill" style={issue.n === 1 ? { background: "var(--mustard)" } : undefined}>{issue.status}</span>
      </div>
      <h2 className="dm">{issue.title}</h2>
      <p>{issue.world}</p>
      {issue.href && <span className="label c-terra">View edition</span>}
    </>
  );
}

export default function Archive() {
  return (
    <>
      <section className="section top">
        <div className="wrap tight">
          <p className="label c-terra">Every edition, worth collecting</p>
          <h1 className="dxl">The Offscreen Archive.</h1>
          <p className="em" style={{ maxWidth: 720 }}>
            A growing library of paper worlds. Every edition keeps its place on this shelf, even after the last copy
            has found a home.
          </p>
        </div>
      </section>

      <section className="section flush">
        <div className="wrap">
          <div className="grid library">
            {issues.map((issue, i) =>
              issue.href ? (
                <Link key={issue.n} href={issue.href} className="lift" style={{ "--tilt-hover": "-1deg" }}>
                  <Edition issue={issue} />
                </Link>
              ) : (
                <div key={issue.n} className="lift" style={{ "--tilt-hover": i % 2 ? "1deg" : "-1deg" }}>
                  <Edition issue={issue} />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="section bg-parch">
        <div className="wrap">
          <Heading label="The collectible system" title="Built to be kept, not recycled." max="820px" />
          <div className="grid" style={{ "--min": "200px" }}>
            {collectible.map(([t, d]) => (
              <div key={t} className="card">
                <h3 className="dm">{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClubBand />
    </>
  );
}
