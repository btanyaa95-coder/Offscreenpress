// The editions. When the ordering system arrives, price and stock can live here
// (or move to a CMS / database) without touching the page layouts.
export const issues = [
  { n: 1, title: "The Festive Bazaar", edition: "The Diwali Edition", art: "c1", world: "An Indian festive market, strung with lights.", status: "First edition", href: "/latest-issue" },
  { n: 2, title: "Summer at Grandma’s", edition: "Coming soon", art: "c2", world: "Summer holidays and old houses.", status: "On the press" },
  { n: 3, title: "The Great Railway Adventure", edition: "Coming soon", art: "c3", world: "A vintage Indian railway journey.", status: "On the press" },
  { n: 4, title: "Monsoon Memories", edition: "Coming soon", art: "c4", world: "Rainy streets and paper boats.", status: "On the press" },
  { n: 5, title: "Neighbourhood Chronicles", edition: "Coming soon", art: "c5", world: "Old neighbourhoods and local shops.", status: "On the press" },
  { n: 6, title: "The Lost Summer Island", edition: "Coming soon", art: "c6", world: "An imaginary island adventure.", status: "On the press" },
];
export const issueNo = (n) => `Issue No. ${String(n).padStart(2, "0")}`;
