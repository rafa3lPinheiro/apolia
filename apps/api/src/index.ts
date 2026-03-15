import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.json({ name: "apolia-api", ok: true }));
app.get("/health", (c) => c.json({ ok: true }));

export default app;
