import Link from "next/link";
import { Button, Cover, Heading, Spark } from "@/components/ui";
import { issues, issueNo } from "@/lib/issues";

export const metadata = {
  title: "The Festive Bazaar — Issue No. 01",
  description:
    "Issue No. 01, The Diwali Edition: a festive bazaar full of hidden objects, mazes, crosswords, riddles and a final mystery.",
};

const anatomy = [
  ["A world of its own", "One distinctive theme, carried from the first page to the last."],
  ["An illustrated cover", "Hand-drawn, detailed and different every month."],
  ["A short opening story", "A few paragraphs to set the scene before you pick up the pencil."],
  ["8–12 kinds of play", "Mazes, hidden objects, crosswords, riddles, doodles and more."],
  ["A final mystery", "Clues gathered across the issue, solved on the last spread."],
  ["An answer section", "For when you’re stuck. Or just checking. We won’t tell."],
  ["A stamp and a note", "A collectible issue stamp and a few words from the publisher."],
];

const activities = [
  ["Hidden Objects", "Explore a detailed illustrated scene."],
  ["Mazes", "Navigate characters through different environments."],
  ["Crosswords", "Solve theme-based clues."],
  ["Word Searches", "Discover hidden words."],
  ["Spot the Difference", "Compare two illustrations."],
  ["Logic Puzzles", "Solve deduction challenges."],
  ["Riddles", "Crack clever questions."],
  ["Connect the Dots", "Reveal hidden pictures."],
  ["Doodle Challenges", "Draw and imagine."],
  ["The Final Mystery", "Combine clues from across the edition."],
];

const mix = [
  ["35%", "Observation and discovery", "var(--mustard)"],
  ["25%", "Logic and reasoning", "var(--peach)"],
  ["20%", "Word-based games", "var(--sage)"],
  ["20%", "Creativity and free play", "var(--rose)"],
];

const specs = [
  ["Format", "210 × 270 mm, roughly A4"],
  ["Length", "32–40 pages"],
  ["Activities", "8–12 formats per issue"],
  ["Cover", "250–300 GSM, full colour"],
  ["Interior", "100–120 GSM uncoated paper"],
  ["Binding", "Saddle stitch"],
];

const readers = [
  "Anyone who’d like one hour a week that doesn’t involve a screen.",
  "People who loved mazes, doodles and riddles as kids, and quietly still do.",
  "Friends, couples and families who want something to do together at the table.",
  "Gift-givers looking for something more thoughtful than another candle.",
  "Every puzzle-solving ability. Nobody’s keeping score.",
];

export default function LatestIssue() {
  return (
    <>
      <section className="section top">
        <div className="wrap">
          <div className="split">
            <div className="fixed" style={{ width: 420, padding: "8px 20px 20px 8px" }}>
              <div className="tilt" style={{ "--tilt": "-2deg" }}>
                <Cover n={1} className="stacked" />
              </div>
            </div>
            <div className="stack">
              <p className="label c-accent">Issue No. 01 · The Diwali Edition</p>
              <h1 className="dxl">The Festive Bazaar</h1>
              <p className="el c-accent">
                The lamps are lit, the shutters are up and the whole street smells of something frying.
              </p>
              <p className="em">
                Our first edition drops you into a bustling festive market, crowded with shopfronts, sweet stalls,
                string lights and at least ten things that aren’t where they should be. Wander it slowly. Solve your
                way from stall to stall. Somewhere in the crowd, a mystery is waiting.
              </p>
              {/* The ordering system will replace this block. */}
              <div className="order">
                <div className="row">
                  <span className="label">Single edition</span>
                  <span className="label c-accent">Price announced at launch</span>
                </div>
                <h2 className="dm">Ordering opens soon.</h2>
                <p>
                  We’re putting the finishing touches on the first print run. Join the Offscreen Club and you’ll be
                  first to know when copies, bundles and gift options are ready.
                </p>
                <div className="row">
                  <Button href="/#club">Tell me when it’s ready</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-parch">
        <div className="wrap">
          <Heading label="Inside the magazine" title="Seven things in every edition." max="820px" />
          <div className="grid" style={{ "--min": "240px" }}>
            {anatomy.map(([t, d], i) => (
              <div key={t} className="card">
                <p className="num" style={{ fontSize: 40 }}>0{i + 1}</p>
                <h3 className="dm">{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Heading label="The activity list" title="Give your brain a little playground." max="820px" />
          <div className="list">
            {activities.map(([t, d], i) => (
              <div key={t}>
                <span className="label c-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="dm">{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
          <div className="stack" style={{ gap: 16 }}>
            <p className="label c-accent">The editorial mix (roughly)</p>
            <div className="grid" style={{ "--min": "220px", gap: 16 }}>
              {mix.map(([p, t, bg]) => (
                <div key={t} className="card" style={{ background: bg, gap: 4, padding: "18px 20px 20px" }}>
                  <p className="num" style={{ fontSize: 40, color: "var(--ink)" }}>{p}</p>
                  <p className="label">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-accent">
        <div className="wrap">
          <div className="split">
            <div className="stack" style={{ gap: 24 }}>
              <Heading label="The object itself" title="Made to be written on." light />
              <div className="table">
                {specs.map(([k, v]) => (
                  <div key={k}>
                    <span className="label c-accent">{k}</span>
                    <span>{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="stack" style={{ gap: 24 }}>
              <Heading label="Who is it for?" title="Curious grown-ups, mostly." light />
              <ul className="ticks">
                {readers.map((r) => (
                  <li key={r}>
                    <Spark />
                    <span className="em">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split">
            <Heading label="Shipping and delivery" title="From our press to your doormat." />
            <div className="stack" style={{ gap: 16 }}>
              <p className="em">Delivery areas, costs and timings will be published here when ordering opens.</p>
              <p>
                Single editions, three-edition bundles and six-edition bundles are all on the way, along with gift
                options.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-parch">
        <div className="wrap">
          <div className="row between">
            <Heading label="On the press" title="Where we’re going next." />
            <Button href="/archive" variant="sec">Visit the archive</Button>
          </div>
          <div className="grid library" style={{ gap: "32px" }}>
            {issues.slice(1, 4).map((issue, i) => (
              <Link key={issue.n} href="/archive" className="lift" style={{ "--tilt-hover": i % 2 ? "-1deg" : "1deg" }}>
                <Cover n={issue.n} />
                <span className="label c-accent">{issueNo(issue.n)}</span>
                <span className="dm">{issue.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
