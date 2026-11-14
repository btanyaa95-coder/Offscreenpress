import "@fontsource/anton";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/fraunces/wght-italic.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/caveat/600.css";
import "./globals.css";
import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata = {
  title: { default: "Offscreen Press — On paper. Off screen.", template: "%s | Offscreen Press" },
  description:
    "A monthly illustrated collection of puzzles, games and little adventures for adults who miss the joy of playing on paper.",
};

export const viewport = { themeColor: "#F4E9D5" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip label">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <footer className="footer">
          <div className="wrap">
            <div className="footer-top">
              <div className="footer-brand">
                <p className="dl">Offscreen Press.</p>
                <p className="el c-mustard">On paper. Off screen.</p>
              </div>
              <div className="footer-col">
                <p className="label c-mustard">Explore</p>
                <Link href="/latest-issue">The latest issue</Link>
                <Link href="/archive">The archive</Link>
                <Link href="/our-story">Our story</Link>
                <Link href="/#club">The Offscreen Club</Link>
              </div>
              <div className="footer-col">
                <p className="label c-mustard">The small print</p>
                {/* TODO: link these once the accounts and pages exist */}
                <span>Instagram</span>
                <span>Contact</span>
                <span>Shipping and returns</span>
                <span>FAQs</span>
                <span>Privacy policy</span>
              </div>
            </div>
            <div className="footer-bottom label">
              <span>Made with curiosity, printed with love.</span>
              <span>© 2026 Offscreen Press</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
