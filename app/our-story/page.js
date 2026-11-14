import { Button, Heading } from "@/components/ui";

export const metadata = {
  title: "Our Story",
  description:
    "Why we started Offscreen Press: to bring the joy of paper-based play back into everyday life, one illustrated edition at a time.",
};

const letter = [
  "Somewhere along the way, our idle moments became digital moments. Waiting for coffee, sitting on a train, a quiet Sunday afternoon, even an evening with friends: the phone is out before we’ve noticed reaching for it.",
  "Offscreen Press began with a simple wish, to bring back the small, absorbing pleasures of childhood. The maze on the back of a notebook. The half-finished doodle. The riddle someone at the table refuses to explain.",
  "So we make something you can hold. A monthly illustrated magazine of puzzles, games and creative play for adults: tangible, a little witty, and designed for an actual pencil.",
  "It isn’t homework and it isn’t brain training. It’s ordinary downtime, turned back into curiosity, creativity and a bit of company.",
];

const traits = [
  ["Nostalgic", "We’ll remind you of simpler afternoons."],
  ["Curious", "Every page is an invitation to explore."],
  ["Playful", "We don’t take ourselves too seriously."],
  ["Thoughtful", "We like things slow and intentional."],
  ["Artistic", "Every edition is a piece of visual storytelling."],
  ["Inclusive", "Fun at any age, and any puzzle-solving ability."],
];

const nots = [
  "A children’s educational workbook.",
  "A competitive brain-training platform.",
  "A newspaper puzzle supplement.",
  "A generic activity-book publisher.",
  "A digital gaming company.",
];

export default function OurStory() {
  return (
    <>
      <section className="section top">
        <div className="wrap tight">
          <p className="label c-accent">Our story</p>
          <h1 className="dxl" style={{ maxWidth: 1000 }}>We believe life is more fun offscreen.</h1>
          <p className="el c-accent">A little escape from the scroll.</p>
        </div>
      </section>

      <section className="section bg-parch">
        <div className="wrap">
          <div className="split">
            <Heading label="A note from the publisher" title="How doing nothing got so busy." />
            <div className="stack">
              {letter.map((p) => (
                <p key={p} className="em">{p}</p>
              ))}
              <p className="hand c-accent">On paper. Off screen. — the Offscreen Press team</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid two">
            <div className="card big" style={{ background: "var(--accent)" }}>
              <p className="label c-parch">Our mission</p>
              <p className="dl">To bring the joy of paper-based play back into everyday life.</p>
            </div>
            <div className="card big" style={{ background: "var(--rose)" }}>
              <p className="label c-parch">Our vision</p>
              <p className="dl">To make analog play desirable, collectible and part of modern life.</p>
            </div>
          </div>
          <Heading label="What we’re like" title="Six things we try to be." max="820px" />
          <div className="grid" style={{ "--min": "300px" }}>
            {traits.map(([t, d], i) => (
              <div key={t} className={`card ${i % 2 ? "peach" : "parch"}`}>
                <h3 className="dm">{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ink">
        <div className="wrap">
          <div className="split">
            <div className="stack" style={{ gap: 16 }}>
              <p className="label c-mustard">For the record</p>
              <h2 className="dl">What we’re not.</h2>
              <p className="el c-mustard">
                We’re an illustrated print publication with an editorial identity of its own.
              </p>
            </div>
            <ul className="nots">
              {nots.map((n) => (
                <li key={n}>
                  <span className="label c-mustard">Not</span>
                  <span className="em">{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow center" style={{ maxWidth: 820, gap: 28 }}>
          <h2 className="dl">Good things happen on paper.</h2>
          <div className="row" style={{ justifyContent: "center" }}>
            <Button href="/latest-issue">Explore the latest issue</Button>
            <Button href="/#club" variant="sec">Join the Offscreen Club</Button>
          </div>
        </div>
      </section>
    </>
  );
}
