// Placeholder illustrations, generated as SVG strings in the brand palette.
// Swap these for the real hand-drawn artwork when it is ready.

const C = {
  cream: "#F4E9D5", ink: "#292724", mustard: "#D9A744",
  blue: "#657F91", sage: "#829078", rose: "#B85C69", peach: "#E6BDA1",
  teal: "#3E5964", parch: "#E8D49C", brown: "#A56C42",
};
const S = `stroke="${C.ink}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"`;
const wrap = (w, h, b, label) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" fill="none" role="img" aria-label="${label}">${b}</svg>`;
const f1 = (n) => Number(n.toFixed(1));

const spark = (x, y, r, f = C.mustard) =>
  `<path d="M${x} ${y - r}Q${x} ${y} ${x + r} ${y}Q${x} ${y} ${x} ${y + r}Q${x} ${y} ${x - r} ${y}Q${x} ${y} ${x} ${y - r}Z" fill="${f}"/>`;
const burst = (x, y, r, col, n = 12) => {
  let s = "";
  for (let i = 0; i < n; i++) {
    const a = (i * 2 * Math.PI) / n;
    s += `<path d="M${f1(x + Math.cos(a) * r * 0.35)} ${f1(y + Math.sin(a) * r * 0.35)}L${f1(x + Math.cos(a) * r)} ${f1(y + Math.sin(a) * r)}" stroke="${col}" stroke-width="3" stroke-linecap="round"/><circle cx="${f1(x + Math.cos(a + 0.26) * r * 1.18)}" cy="${f1(y + Math.sin(a + 0.26) * r * 1.18)}" r="2" fill="${col}"/>`;
  }
  return s;
};
const shop = (x, y, w, h, wall, a1, a2, win) => {
  let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${wall}" ${S}/>`;
  s += `<rect x="${x + 8}" y="${y - 24}" width="${w - 16}" height="20" fill="${C.cream}" ${S}/><path d="M${x + 20} ${y - 14}H${x + w - 20}" ${S}/>`;
  const n = 5, seg = w / n;
  for (let i = 0; i < n; i++) {
    const sx = x + i * seg;
    s += `<path d="M${f1(sx)} ${y}h${f1(seg)}v18a${f1(seg / 2)} ${f1(seg / 2.4)} 0 0 1 -${f1(seg)} 0Z" fill="${i % 2 ? a2 : a1}" ${S}/>`;
  }
  s += `<rect x="${f1(x + w * 0.58)}" y="${y + h - 56}" width="${f1(w * 0.28)}" height="56" fill="${C.ink}" ${S}/>`;
  s += `<rect x="${f1(x + w * 0.12)}" y="${y + 46}" width="${f1(w * 0.34)}" height="36" fill="${win}" ${S}/><path d="M${f1(x + w * 0.29)} ${y + 46}v36M${f1(x + w * 0.12)} ${y + 64}h${f1(w * 0.34)}" ${S}/>`;
  return s;
};
const diya = (x, y) =>
  `<path d="M${x - 12} ${y}q12 14 24 0Z" fill="${C.rose}" ${S}/><path d="M${x} ${y - 2}q-6 -8 0 -16q6 8 0 16Z" fill="${C.mustard}" ${S}/>`;
const bird = (x, y, f) =>
  `<ellipse cx="${x}" cy="${y}" rx="9" ry="6" fill="${f}" ${S}/><path d="M${x + 8} ${y - 2}l7 2l-7 2Z" fill="${C.mustard}" ${S}/><circle cx="${x + 4}" cy="${y - 2}" r="1.2" fill="${C.ink}"/><path d="M${x - 8} ${y}l-7 -4" ${S}/>`;
const lamp = (x, y, h) =>
  `<path d="M${x} ${y}v-${h}" ${S} stroke-width="4"/><circle cx="${x}" cy="${y - h - 10}" r="18" fill="${C.mustard}" opacity=".35"/><rect x="${x - 8}" y="${y - h - 20}" width="16" height="20" fill="${C.mustard}" ${S}/><path d="M${x - 11} ${y - h - 20}h22l-5 -7h-12Z" fill="${C.ink}" ${S}/>`;
const cloud = (x, y, s = 1) =>
  `<path d="M${x} ${y}a${14 * s} ${14 * s} 0 0 1 ${22 * s} -${12 * s}a${18 * s} ${18 * s} 0 0 1 ${34 * s} ${2 * s}a${13 * s} ${13 * s} 0 0 1 ${16 * s} ${22 * s}h-${70 * s}a${12 * s} ${12 * s} 0 0 1 -${2 * s} -${12 * s}Z" fill="${C.cream}" ${S}/>`;

const art = {};

// 01 The Festive Bazaar
{
  let b = `<rect width="400" height="420" fill="${C.teal}"/>`;
  b += burst(80, 72, 34, C.mustard) + burst(312, 86, 44, C.peach, 14) + burst(196, 48, 22, C.cream, 10);
  for (const [x, y, r] of [[30, 30, 6], [140, 100, 5], [250, 30, 7], [370, 160, 5], [120, 160, 4], [236, 120, 5], [20, 120, 5], [380, 40, 5]]) b += spark(x, y, r);
  let pts = "", bulbs = "";
  for (let i = 0; i <= 24; i++) {
    const x = (i * 400) / 24, y = 176 + 16 * Math.pow(Math.sin((i * Math.PI) / 8), 2);
    pts += (i ? "L" : "M") + f1(x) + " " + f1(y);
    if (i % 2) bulbs += `<circle cx="${f1(x)}" cy="${f1(y + 6)}" r="5" fill="${[C.mustard, C.rose, C.cream][i % 3]}" ${S} stroke-width="2"/>`;
  }
  b += `<path d="${pts}" ${S} stroke="${C.cream}" stroke-width="2"/>` + bulbs;
  b += shop(18, 236, 112, 124, C.rose, C.cream, C.rose, C.mustard) + shop(142, 214, 118, 146, C.mustard, C.cream, C.rose, C.parch) + shop(272, 246, 110, 114, C.sage, C.cream, C.mustard, C.mustard);
  b += `<rect x="-4" y="360" width="408" height="64" fill="${C.brown}" ${S}/>`;
  b += lamp(264, 372, 120) + bird(60, 206, C.cream) + bird(330, 218, C.rose);
  for (const x of [40, 96, 170, 226, 318, 366]) b += diya(x, 392);
  b += `<path d="M200 176v14" ${S} stroke="${C.cream}"/><path d="M200 190l12 14l-12 14l-12 -14Z" fill="${C.rose}" ${S}/><path d="M200 218v12M194 222v8M206 222v8" ${S} stroke="${C.cream}" stroke-width="2"/>`;
  art.c1 = wrap(400, 420, b, "A festive night market with three shopfronts, string lights, fireworks and oil lamps");
}
// 02 Summer at Grandma's
{
  let b = `<rect width="400" height="420" fill="${C.peach}"/>`;
  b += burst(312, 84, 62, C.rose, 16) + `<circle cx="312" cy="84" r="34" fill="${C.mustard}" ${S}/>`;
  b += `<path d="M70 96l22 -26l22 26l-22 26Z" fill="${C.rose}" ${S}/><path d="M92 122q-14 22 6 40q16 16 -4 36" ${S} stroke-width="2"/>`;
  b += `<rect x="-4" y="356" width="408" height="68" fill="${C.sage}" ${S}/>`;
  b += `<rect x="56" y="214" width="216" height="142" fill="${C.cream}" ${S}/><path d="M36 216L164 128L292 216Z" fill="${C.rose}" ${S}/><path d="M80 190h168M112 166h104" ${S} stroke-width="2"/>`;
  b += `<rect x="142" y="276" width="46" height="80" fill="${C.sage}" ${S}/><circle cx="180" cy="318" r="2.5" fill="${C.ink}"/>`;
  for (const x of [76, 210]) b += `<rect x="${x}" y="246" width="44" height="46" fill="${C.blue}" ${S}/><path d="M${x + 22} 246v46M${x} 269h44" ${S}/>`;
  b += `<path d="M40 356h250v-10H56Z" fill="${C.brown}" ${S}/>`;
  b += `<path d="M336 356V236" ${S} stroke-width="10" stroke="${C.brown}"/><circle cx="336" cy="204" r="52" fill="${C.sage}" ${S}/><circle cx="296" cy="232" r="30" fill="${C.sage}" ${S}/><circle cx="372" cy="236" r="26" fill="${C.sage}" ${S}/>`;
  for (const [x, y] of [[316, 196], [350, 216], [300, 240], [366, 184]]) b += `<ellipse cx="${x}" cy="${y}" rx="6" ry="8" fill="${C.mustard}" ${S} stroke-width="2"/>`;
  b += bird(120, 142, C.blue);
  art.c2 = wrap(400, 420, b, "An old house under a big summer sun, with a mango tree and a kite");
}
// 03 The Great Railway Adventure
{
  let b = `<rect width="400" height="420" fill="${C.mustard}"/><circle cx="90" cy="90" r="36" fill="${C.cream}" ${S}/>`;
  b += `<path d="M-4 300Q90 210 200 280T404 250V424H-4Z" fill="${C.sage}" ${S}/><path d="M-4 340Q120 300 240 336T404 320V424H-4Z" fill="${C.teal}" ${S}/>`;
  for (let i = 0; i < 14; i++) b += `<path d="M${i * 32} 352v16" ${S} stroke-width="5" stroke="${C.brown}"/>`;
  b += `<path d="M-4 352H404" ${S} stroke-width="4"/>`;
  b += `<rect x="-60" y="286" width="112" height="54" fill="${C.rose}" ${S}/><rect x="62" y="286" width="126" height="54" fill="${C.cream}" ${S}/>`;
  for (const x of [76, 112, 148]) b += `<rect x="${x}" y="298" width="24" height="20" fill="${C.blue}" ${S} stroke-width="2"/>`;
  b += `<path d="M52 320h10M188 320h12" ${S}/><rect x="200" y="280" width="118" height="60" fill="${C.rose}" ${S}/><rect x="280" y="246" width="58" height="94" fill="${C.rose}" ${S}/><rect x="292" y="258" width="34" height="28" fill="${C.cream}" ${S}/><rect x="216" y="252" width="22" height="28" fill="${C.ink}" ${S}/><path d="M318 340h34l-14 -22h-20Z" fill="${C.ink}" ${S}/>`;
  for (const x of [10, 90, 160, 226, 270, 318]) b += `<circle cx="${x}" cy="342" r="12" fill="${C.ink}" ${S}/><circle cx="${x}" cy="342" r="4" fill="${C.cream}"/>`;
  for (const [x, y, r] of [[226, 228, 12], [240, 200, 17], [268, 172, 22], [306, 150, 26]]) b += `<circle cx="${x}" cy="${y}" r="${r}" fill="${C.cream}" ${S}/>`;
  b += `<path d="M150 110q8 -10 16 0q8 -10 16 0M210 80q7 -9 14 0q7 -9 14 0" ${S} stroke-width="2"/>`;
  b += `<path d="M372 352V250" ${S} stroke-width="4"/><rect x="362" y="232" width="20" height="34" fill="${C.ink}" ${S}/><circle cx="372" cy="242" r="5" fill="${C.rose}"/><circle cx="372" cy="256" r="5" fill="${C.sage}"/>`;
  art.c3 = wrap(400, 420, b, "A steam train crossing rolling hills at sunset");
}
// 04 Monsoon Memories
{
  let b = `<rect width="400" height="420" fill="${C.blue}"/>`;
  for (let i = 0; i < 34; i++) {
    const x = ((i * 53) % 420) - 10, y = ((i * 97) % 300) + 60;
    b += `<path d="M${x} ${y}l-8 22" stroke="${C.cream}" stroke-width="2" stroke-linecap="round" opacity=".75"/>`;
  }
  b += cloud(30, 90, 1.5) + cloud(210, 70, 1.8) + cloud(130, 130, 1);
  b += `<rect x="-4" y="326" width="408" height="98" fill="${C.teal}" ${S}/><ellipse cx="200" cy="376" rx="150" ry="26" fill="${C.blue}" ${S}/>`;
  b += `<path d="M200 296L232 348H168Z" fill="${C.cream}" ${S}/><path d="M200 296V348" ${S}/><path d="M146 348H254L236 374H164Z" fill="${C.cream}" ${S}/><path d="M120 384q10 -6 20 0M258 386q10 -6 20 0M176 392q10 -6 20 0" ${S} stroke="${C.cream}" stroke-width="2"/>`;
  b += `<path d="M262 250a54 54 0 0 1 108 0q-13 -10 -27 0q-13 -10 -27 0q-13 -10 -27 0q-13 -10 -27 0Z" fill="${C.rose}" ${S}/><path d="M316 196v-8M316 250v70q0 12 -12 12" ${S}/>`;
  b += lamp(56, 326, 150);
  art.c4 = wrap(400, 420, b, "A paper boat in a puddle on a rainy street, with an umbrella and a street lamp");
}
// 05 Neighbourhood Chronicles
{
  let b = `<rect width="400" height="420" fill="${C.parch}"/><circle cx="330" cy="70" r="30" fill="${C.rose}" ${S}/>`;
  b += `<path d="M40 70q8 -10 16 0q8 -10 16 0M120 46q7 -9 14 0q7 -9 14 0" ${S} stroke-width="2"/>`;
  const hs = [[10, 150, 76, C.rose, 1], [86, 196, 70, C.blue, 0], [156, 120, 84, C.cream, 1], [240, 176, 72, C.rose, 0], [312, 140, 80, C.sage, 1]];
  for (const [x, y, w, col, roof] of hs) {
    b += `<rect x="${x}" y="${y}" width="${w}" height="${360 - y}" fill="${col}" ${S}/>`;
    if (roof) b += `<path d="M${x - 6} ${y}L${x + w / 2} ${y - 40}L${x + w + 6} ${y}Z" fill="${C.brown}" ${S}/>`;
    else b += `<rect x="${x - 4}" y="${y - 10}" width="${w + 8}" height="10" fill="${C.ink}" ${S}/>`;
    for (let r = 0; y + 18 + r * 46 < 280; r++)
      for (const dx of [0.16, 0.58]) b += `<rect x="${f1(x + w * dx)}" y="${y + 18 + r * 46}" width="${f1(w * 0.26)}" height="26" fill="${col === C.cream ? C.blue : C.cream}" ${S} stroke-width="2"/>`;
    b += `<rect x="${f1(x + w * 0.36)}" y="316" width="${f1(w * 0.3)}" height="44" fill="${C.ink}" ${S}/>`;
  }
  b += `<rect x="-4" y="360" width="408" height="64" fill="${C.brown}" ${S}/>`;
  b += `<circle cx="76" cy="372" r="20" ${S}/><circle cx="136" cy="372" r="20" ${S}/><path d="M76 372l20 -30h30l10 30M96 342l14 30h-34M126 342l-16 30M92 336h12M124 334l8 -6" ${S}/>`;
  b += lamp(290, 372, 110) + bird(206, 112, C.rose);
  art.c5 = wrap(400, 420, b, "A row of colourful old townhouses with a bicycle parked outside");
}
// 06 The Lost Summer Island
{
  let b = `<rect width="400" height="420" fill="${C.rose}"/>` + burst(92, 96, 58, C.cream, 16) + `<circle cx="92" cy="96" r="32" fill="${C.mustard}" ${S}/>`;
  b += cloud(250, 70, 1.2);
  b += `<rect x="-4" y="296" width="408" height="128" fill="${C.teal}" ${S}/>`;
  b += `<path d="M90 310Q200 200 320 310Z" fill="${C.parch}" ${S}/>`;
  b += `<path d="M214 262Q206 200 232 150" ${S} stroke-width="9" stroke="${C.brown}"/>`;
  for (const d of ["M232 150q-50 -34 -84 4q44 -14 84 -4Z", "M232 150q-30 -52 -76 -40q46 8 76 40Z", "M232 150q40 -44 84 -18q-46 -4 -84 18Z", "M232 150q56 -8 70 38q-28 -32 -70 -38Z", "M232 150q-6 -50 30 -66q-18 34 -30 66Z"]) b += `<path d="${d}" fill="${C.sage}" ${S}/>`;
  b += `<path d="M150 286l14 14M164 286l-14 14" ${S} stroke="${C.rose}" stroke-width="4"/><path d="M176 290q16 -14 30 -4" ${S} stroke-dasharray="3 6" stroke-width="2"/>`;
  for (const [x, y] of [[30, 340], [120, 372], [250, 350], [330, 384], [200, 396]]) b += `<path d="M${x} ${y}q10 -7 20 0q10 7 20 0" ${S} stroke="${C.cream}" stroke-width="2"/>`;
  b += `<path d="M318 330h56l-12 20h-32Z" fill="${C.cream}" ${S}/><path d="M346 330v-40l22 34Z" fill="${C.mustard}" ${S}/>`;
  art.c6 = wrap(400, 420, b, "A small island with a palm tree, a treasure mark and a sailing boat");
}

// Activity samples
{
  let seed = 11;
  const rnd = () => (seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648;
  const cols = 13, rows = 7, cs = 20, ox = 30, oy = 20;
  const vis = new Set(["0,3"]), open = new Set(), st = [[0, 3]];
  while (st.length) {
    const [x, y] = st[st.length - 1];
    const nb = [[1, 0], [-1, 0], [0, 1], [0, -1]].map(([dx, dy]) => [x + dx, y + dy]).filter(([a, b2]) => a >= 0 && b2 >= 0 && a < cols && b2 < rows && !vis.has(a + "," + b2));
    if (!nb.length) { st.pop(); continue; }
    const [nx, ny] = nb[Math.floor(rnd() * nb.length)];
    open.add([x, y, nx, ny].join()); open.add([nx, ny, x, y].join());
    vis.add(nx + "," + ny); st.push([nx, ny]);
  }
  let d = "";
  for (let y = 0; y < rows; y++)
    for (let x = 0; x < cols; x++) {
      const X = ox + x * cs, Y = oy + y * cs;
      if (y === 0) d += `M${X} ${Y}h${cs}`;
      if (x === 0 && y !== 3) d += `M${X} ${Y}v${cs}`;
      if (!open.has([x, y, x + 1, y].join()) && !(x === cols - 1 && y === 3)) d += `M${X + cs} ${Y}v${cs}`;
      if (!open.has([x, y, x, y + 1].join())) d += `M${X} ${Y + cs}h${cs}`;
    }
  art.maze = wrap(320, 180, `<path d="${d}" ${S}/><circle cx="16" cy="90" r="7" fill="${C.rose}" ${S} stroke-width="2"/><path d="M296 96v-12l10 -9l10 9v12Z" fill="${C.mustard}" ${S} stroke-width="2"/>`, "A small maze leading to a house");
}
art.hidden = wrap(320, 180,
  spark(40, 40, 12) + spark(280, 130, 9, C.rose) + diya(70, 140) + bird(250, 50, C.rose) +
  `<path d="M110 60l14 -16l14 16l-14 16Z" fill="${C.sage}" ${S}/><path d="M124 76q-8 14 4 24" ${S} stroke-width="2"/><path d="M36 96h30M66 96v10M58 96v8" ${S}/><circle cx="28" cy="96" r="9" fill="${C.mustard}" ${S}/><path d="M270 96L288 126H252Z" fill="${C.cream}" ${S}/><path d="M240 126H300L290 142H250Z" fill="${C.cream}" ${S}/><circle cx="170" cy="86" r="44" fill="${C.cream}" ${S} stroke-width="4"/><path d="M202 118l34 36" ${S} stroke-width="9"/>` +
  spark(160, 76, 14, C.rose) + `<path d="M176 98q6 -10 12 0q0 8 -6 8t-6 -8Z" fill="${C.sage}" ${S} stroke-width="2"/>`,
  "A magnifying glass among small scattered objects");
{
  const cs = 26, ox = 69, oy = 12, cells = {};
  const put = (c, r, ch = "") => (cells[c + "," + r] = ch);
  "PAPER".split("").forEach((ch, i) => put(1 + i, 2, ch));
  "LAY".split("").forEach((ch, i) => put(3, 3 + i, ch));
  for (const c of [4, 5, 6]) put(c, 4);
  for (const r of [0, 1]) put(5, r);
  put(0, 2); put(1, 3); put(1, 1);
  let b = "";
  for (const k in cells) {
    const [c, r] = k.split(",").map(Number), X = ox + c * cs, Y = oy + r * cs;
    b += `<rect x="${X}" y="${Y}" width="${cs}" height="${cs}" fill="${C.cream}" ${S} stroke-width="2"/>`;
    if (cells[k]) b += `<text x="${X + cs / 2}" y="${Y + 19}" font-family="monospace" font-weight="700" font-size="16" text-anchor="middle" fill="${C.ink}">${cells[k]}</text>`;
  }
  b += `<rect x="${ox + 2 * cs}" y="${oy + 3 * cs}" width="${cs}" height="${cs}" fill="${C.ink}" ${S} stroke-width="2"/><rect x="${ox + 6 * cs}" y="${oy + 2 * cs}" width="${cs}" height="${cs}" fill="${C.ink}" ${S} stroke-width="2"/>`;
  art.cross = wrap(320, 180, b, "A crossword grid spelling paper and play");
}
{
  const scene = (x, v) =>
    `<rect x="${x}" y="24" width="132" height="132" fill="${C.cream}" ${S}/><circle cx="${x + 100}" cy="54" r="14" fill="${v ? C.rose : C.mustard}" ${S} stroke-width="2"/><path d="M${x} 126q34 -26 66 0t66 -6v36h-132Z" fill="${C.sage}" ${S}/><rect x="${x + 30}" y="84" width="44" height="40" fill="${C.peach}" ${S} stroke-width="2"/><path d="M${x + 24} 84l28 -22l28 22Z" fill="${C.rose}" ${S} stroke-width="2"/><rect x="${x + 46}" y="100" width="12" height="24" fill="${v ? C.blue : C.ink}" ${S} stroke-width="2"/>` + (v ? bird(x + 26, 46, C.rose) : "");
  art.spot = wrap(320, 180, scene(18, 0) + scene(170, 1) + `<circle cx="196" cy="46" r="20" stroke="${C.rose}" stroke-width="2.5" stroke-dasharray="5 5"/>`, "Two nearly identical scenes with one difference circled");
}
{
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const a = -Math.PI / 2 + (i * Math.PI) / 5, r = i % 2 ? 32 : 72;
    pts.push([f1(150 + Math.cos(a) * r), f1(92 + Math.sin(a) * r)]);
  }
  let b = `<path d="${pts.slice(0, 6).map((p, i) => (i ? "L" : "M") + p[0] + " " + p[1]).join("")}" ${S}/>`;
  pts.forEach((p, i) => {
    b += `<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="${C.ink}"/><text x="${f1(p[0] + (p[0] < 150 ? -14 : 8))}" y="${f1(p[1] - 6)}" font-family="monospace" font-size="11" font-weight="700" fill="${C.ink}">${i + 1}</text>`;
  });
  const [px, py] = pts[5];
  b += `<g transform="rotate(38 ${px} ${py})"><rect x="${px - 5}" y="${py - 78}" width="10" height="62" fill="${C.mustard}" ${S} stroke-width="2"/><path d="M${px - 5} ${py - 16}h10l-5 16Z" fill="${C.cream}" ${S} stroke-width="2"/><rect x="${px - 5}" y="${py - 88}" width="10" height="10" fill="${C.rose}" ${S} stroke-width="2"/></g>`;
  art.dots = wrap(320, 180, b, "A half-finished connect-the-dots star with a pencil");
}
art.mystery = wrap(320, 180,
  `<rect x="60" y="46" width="150" height="100" fill="${C.cream}" ${S}/><path d="M60 46l75 56l75 -56M60 146l56 -52M210 146l-56 -52" ${S}/><circle cx="135" cy="106" r="16" fill="${C.rose}" ${S}/><path d="M129 106l4 5l8 -10" ${S} stroke="${C.cream}" stroke-width="2"/><circle cx="250" cy="60" r="14" fill="${C.mustard}" ${S}/><circle cx="250" cy="60" r="4" fill="${C.cream}" ${S} stroke-width="2"/><path d="M250 74v52M250 110h12M250 122h9" ${S} stroke-width="4"/>` +
  spark(232, 140, 10, C.rose) + spark(40, 36, 9) + `<text x="282" y="150" font-family="Georgia,serif" font-weight="700" font-size="44" fill="${C.rose}">?</text>`,
  "A sealed envelope, a key and a question mark");
{
  let b = `<rect x="300" y="20" width="180" height="170" fill="${C.blue}" ${S}/><path d="M390 20v170M300 105h180" ${S}/>`;
  for (let i = 0; i < 16; i++) {
    const x = 310 + ((i * 47) % 160), y = 30 + ((i * 61) % 140);
    b += `<path d="M${x} ${y}l-5 14" stroke="${C.cream}" stroke-width="2" stroke-linecap="round" opacity=".8"/>`;
  }
  b += `<rect x="290" y="190" width="200" height="12" fill="${C.cream}" ${S}/><path d="M428 190v-34q-22 -16 -8 -40q10 22 8 40q8 -30 28 -34q-4 26 -28 40" fill="${C.sage}" ${S}/><path d="M410 190h36l-5 -22h-26Z" fill="${C.rose}" ${S}/>`;
  b += `<path d="M10 250H510L480 380H40Z" fill="${C.brown}" ${S}/>`;
  b += `<path d="M110 348L122 214L256 204V332Z" fill="${C.cream}" ${S}/><path d="M256 204L392 214L404 348L256 332Z" fill="${C.cream}" ${S}/>`;
  b += `<path d="M140 236h90M140 236v80M140 316h60M230 236v54M170 262h34M170 262v30M204 290h26M158 290h12" ${S} stroke-width="2"/><circle cx="150" cy="226" r="4" fill="${C.rose}"/>`;
  b += `<rect x="280" y="226" width="58" height="44" fill="${C.rose}" ${S} stroke-width="2"/>` + spark(309, 248, 12, C.mustard) + `<path d="M350 232h32M350 246h28M350 260h32M282 286h102M282 300h96M282 314h60" ${S} stroke-width="2"/>`;
  b += `<g transform="rotate(-62 232 352)"><rect x="150" y="346" width="150" height="12" fill="${C.mustard}" ${S} stroke-width="2"/><path d="M300 346l18 6l-18 6Z" fill="${C.cream}" ${S} stroke-width="2"/><rect x="138" y="346" width="12" height="12" fill="${C.rose}" ${S} stroke-width="2"/></g>`;
  b += `<path d="M48 232h50l-7 70h-36Z" fill="#C98A52" ${S}/><ellipse cx="73" cy="232" rx="25" ry="7" fill="${C.peach}" ${S}/><path d="M62 212q-8 -12 0 -24t0 -24M84 212q-8 -12 0 -24t0 -24" ${S} stroke-width="2"/>`;
  b += `<rect x="420" y="282" width="52" height="84" rx="8" fill="${C.ink}" ${S} transform="rotate(14 446 324)"/><text x="452" y="262" font-family="monospace" font-weight="700" font-size="16" fill="${C.ink}">z z z</text>`;
  art.table = wrap(520, 400, b, "An open magazine on a table with a pencil and a cup of chai, a phone asleep beside it, rain at the window");
}

export default art;
