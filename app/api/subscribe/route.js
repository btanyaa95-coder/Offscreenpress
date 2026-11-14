// Newsletter signup. Forwards the email to whatever tool you use (Mailchimp,
// Zapier, Make, a Google Sheet script…) via a webhook URL set in Vercel as the
// NEWSLETTER_WEBHOOK_URL environment variable. Until that is set, the form
// tells visitors that signups aren't switched on yet rather than pretending.
export async function POST(request) {
  const { email } = await request.json().catch(() => ({}));
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return Response.json({ error: "invalid" }, { status: 400 });
  }
  const webhook = process.env.NEWSLETTER_WEBHOOK_URL;
  if (!webhook) return Response.json({ error: "not_configured" }, { status: 503 });

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source: "offscreen-club" }),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return Response.json({ ok: true });
  } catch (err) {
    console.error("Newsletter signup failed", err);
    return Response.json({ error: "error" }, { status: 502 });
  }
}
