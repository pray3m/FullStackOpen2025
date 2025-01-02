import express from "express";
import cors from "cors";
import router from "./routes/index";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.use("/api", router);

export default app;
