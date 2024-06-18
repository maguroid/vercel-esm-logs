import express, { Router } from "express";

const app = express();
const router = Router();

app.use("/api", router);
router.get("/log", (req, res) => {
  for (let i = 0; i < 10; i++) {
    console.log(`Hello, world! ${i}`);
  }

  res.json({ message: "Hello World" });
});

export default app;
