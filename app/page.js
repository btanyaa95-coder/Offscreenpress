import Link from "next/link";
import { Art, Button, Cover, Heading, Spark } from "@/components/ui";
import ClubForm from "@/components/ClubForm";
import { issues, issueNo } from "@/lib/issues";

const mottos = [
  "Less scrolling. More doodling.",
  "Good things happen on paper.",
  "A little paper. A lot of play.",
  "Rediscover the art of getting bored.",
];

const steps = [
  ["A new world arrives", "Every month, one illustrated edition built around a new theme: a festive bazaar, a rainy street, a lost island. Each one is its own little universe."],
  ["You pick up a pencil", "Eight to twelve kinds of play in every issue. Mazes, hidden objects, crosswords, riddles, doodles. No batteries, no notifications, no wrong way to do it."],
  ["You crack the final mystery", "Clues are tucked across the pages. Put them together, solve the last puzzle, check the answers at the back, then give the issue a spot on your shelf."],
];

const specs = [
  ["Activities", "8–12 formats"],
  ["Pages", "32–40"],
  ["Format", "210 × 270 mm"],
  ["Paper", "Uncoated, pencil-friendly"],
  ["Price", "Announced at launch"],
  ["Shipping", "Details at launch"],
];

const levels = { e: "Easy Peasy", t: "Think a Little", h: "Head Scratcher" };

const activities = [
  ["hidden", "Find the hidden objects.", "Somewhere in this bustling bazaar, ten things are hiding. Can you find them all?", "e"],
  ["maze", "Make your way through the maze.", "A wrong turn here, a clever shortcut there. Find your way home.", "e"],
  ["cross", "Crack the crossword.", "Clues pulled straight from the world of the issue. Pencil recommended. Eraser, too.", "t"],
  ["spot", "Spot the difference.", "Two scenes that look the same. They aren’t. Look again.", "t"],
  ["dots", "Connect, doodle, imagine.", "Join the dots, finish the drawing, fill the empty page. There are no wrong answers here.", "e"],
  ["mystery", "The final mystery.", "Every clue leads somewhere. Put the pieces together and solve the final puzzle.", "h"],
];

export default function Home() {
  return (
    <>
      <section className="section top">
        <div className="wrap">
          <div className="split middle">
            <div className="hero-copy">
              <p className="label c-terra">A monthly paper adventure · Issue No. 01</p>
              <h1 className="dxl">Your screen can wait.</h1>
              <p className="el c-terra">There’s fun on paper.</p>
              <p className="em">
                A monthly collection of puzzles, games and little adventures. Made for curious minds, slow afternoons
                and anyone who remembers how fun doing nothing used to be.
              </p>
              <div className="row">
                <Button href="/latest-issue">Explore the latest issue</Button>
                <Button href="/#why" variant="sec">Why Offscreen?</Button>
              </div>
            </div>
            <div className="stage fixed">
              <Link href="/latest-issue" className="tilt" style={{ "--tilt": "3deg", "--tilt-hover": "1deg", width: "100%" }} aria-label="The Festive Bazaar, Issue No. 01">
                <Cover n={1} className="stacked" />
              </Link>
              <div className="stamp" aria-hidden="true">
                <span className="label">Issue</span>
                <b>01</b>
              </div>
              <p className="hand c-terra">psst… ten things are hiding in this bazaar</p>
            </div>
          </div>
        </div>
      </section>

      <div className="strip">
        {mottos.map((m, i) => (
          <span key={m} className="row" style={{ gap: 28 }}>
            {i > 0 && <Spark />}
            <span className="label">{m}</span>
          </span>
        ))}
      </div>

      <section className="section">
        <div className="wrap">
          <Heading label="How it works" title="Made for the joy of figuring things out." max="820px" />
          <div className="grid">
            {steps.map(([t, d], i) => (
              <div key={t} className={`card ${i % 2 ? "peach" : "parch"}`}>
                <p className="num">0{i + 1}</p>
                <h3 className="dm">{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-terra">
        <div className="wrap">
          <Heading label="The latest issue" title="A new world. Every month." light />
          <div className="split">
            <div className="fixed" style={{ width: 340, paddingRight: 16, paddingBottom: 16 }}>
              <Link href="/latest-issue" className="tilt" style={{ "--tilt": "-2deg" }} aria-label="The Festive Bazaar, Issue No. 01">
                <Cover n={1} className="stacked" />
              </Link>
            </div>
            <div className="stack">
              <p className="label c-parch">Issue No. 01 · The Diwali Edition</p>
              <h3 className="dl">The Festive Bazaar</h3>
              <p className="em">
                Step into a market strung with lights and crowded with shopfronts, sweet stalls and things that aren’t
                quite where they should be. Wander it slowly, with a pencil.
              </p>
              <div className="specs">
                {specs.map(([k, v]) => (
                  <div key={k}>
                    <span className="label c-terra">{k}</span>
                    <span>{v}</span>
                  </div>
                ))}
              </div>
              <div className="row">
                <Button href="/latest-issue" variant="ink">Get your copy</Button>
                <span className="label">Ordering opens soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Heading label="What’s inside?" title="Not just a magazine. A whole lot of play." max="900px" />
          <div className="grid" style={{ "--min": "300px" }}>
            {activities.map(([key, t, d, level], i) => (
              <article key={key} className="card activity">
                <Art name={key} className={i % 2 ? "bg-peach" : "bg-parch"} />
                <div className="body">
                  <span className={`pill ${level}`}>{levels[level]}</span>
                  <h3 className="dm">{t}</h3>
                  <p>{d}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="legend">
            <div><span className="pill e">Easy Peasy</span><p>Warm-ups for sleepy Sunday mornings.</p></div>
            <div><span className="pill t">Think a Little</span><p>A second cup of chai might help.</p></div>
            <div><span className="pill h">Head Scratcher</span><p>Solve one and you’ve earned bragging rights.</p></div>
          </div>
        </div>
      </section>

      <section className="section bg-parch" id="why">
        <div className="wrap">
          <div className="split middle">
            <div className="stack">
              <p className="label c-terra">Why Offscreen?</p>
              <h2 className="dl">Remember when you didn’t need a screen to have fun?</h2>
              <p className="em">When a pencil and a piece of paper could keep you occupied for hours.</p>
              <p className="em">When solving a maze felt like an adventure.</p>
              <p className="em">When a rainy afternoon meant paper boats, doodles and games.</p>
              <p className="em">We miss that feeling. So we decided to bring a little of it back.</p>
              <p className="el c-terra">Welcome to Offscreen Press.</p>
              <div className="row">
                <Button href="/our-story" variant="sec">Read our story</Button>
              </div>
            </div>
            <figure className="figure fixed" style={{ margin: 0 }}>
              <Art name="table" />
              <figcaption className="label">Fig. 01 — a slow afternoon, properly spent</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="row between">
            <Heading label="Every edition, worth collecting" title="The Offscreen Archive." />
            <Button href="/archive" variant="sec">Visit the archive</Button>
          </div>
          <div className="grid shelf">
            {issues.map((issue, i) => (
              <Link key={issue.n} href={issue.href || "/archive"} className="lift" style={{ "--tilt-hover": i % 2 ? "1.5deg" : "-1.5deg" }}>
                <Cover n={issue.n} className="sm" />
                <span className="label c-terra" style={{ paddingTop: 6 }}>{issueNo(issue.n)}</span>
                <span>{issue.title}</span>
                <span className="label" style={{ fontSize: 11 }}>{issue.status}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-blue" id="club">
        <div className="wrap narrow center">
          <p className="label c-parch">The Offscreen Club</p>
          <h2 className="dl">Good things are better shared.</h2>
          <p className="em">
            New editions, little surprises, creative challenges and occasional notes from the world of Offscreen Press.
            Straight to your inbox, and never too often.
          </p>
          <ClubForm />
        </div>
      </section>
    </>
  );
}
