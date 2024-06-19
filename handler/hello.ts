import { Handler } from "hono";

export const helloHandler: Handler = (c) => {
  return c.json({ message: "Hello from Hono" });
};
