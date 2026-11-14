"use client";

import { useState } from "react";

const messages = {
  ok: "You’re in. Welcome to the club!",
  not_configured: "Signups aren’t switched on yet. Please check back soon.",
  invalid: "That email doesn’t look right. Mind checking it?",
  error: "Something went wrong. Please try again in a moment.",
};

export default function ClubForm() {
  const [state, setState] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    setState("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      setState(res.ok ? "ok" : data.error || "error");
    } catch {
      setState("error");
    }
  }

  return (
    <form className="club-form" onSubmit={onSubmit}>
      <label className="club-field">
        <span className="label">Your email</span>
        <input type="email" name="email" required placeholder="you@somewhere.com" autoComplete="email" />
      </label>
      <button className="btn" type="submit" disabled={state === "sending" || state === "ok"}>
        {state === "sending" ? "Joining…" : "Join the Offscreen Club"}
      </button>
      <p className="club-status label" role="status" aria-live="polite">
        {messages[state] || "No spam. Just paper things."}
      </p>
    </form>
  );
}
