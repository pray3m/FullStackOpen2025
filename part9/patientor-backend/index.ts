import express from "express";

const app = express();

app.use(express.json());

app.get("/api/ping", (_req, res) => {
  res.send(" 🏓 pong!");
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
