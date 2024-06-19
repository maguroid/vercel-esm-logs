import { handle } from "hono/vercel";
import { Hono } from "hono";
import { helloHandler } from "../handler/hello.js";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/log", (c) => {
  for (let i = 0; i < 10; i++) {
    console.log(`Hello, world! ${i}`);
  }

  return c.json({ message: "Hello from Hono" });
});

app.get("/hello", helloHandler);

export const GET = handle(app);
export const POST = handle(app);
