import express from "express";
import { calculateBmi } from "./bmiCalculator";

const app = express();

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack");
});

app.get("/bmi", (req, res) => {
  const height = req.query.height;
  const weight = req.query.weight;

  if (
    typeof height !== "string" ||
    typeof weight !== "string" ||
    isNaN(Number(height)) ||
    isNaN(Number(weight))
  ) {
    res.status(400).json({ error: "malformatted parameters" });
    return;
  }

  const heightCm = Number(height);
  const weightKg = Number(weight);

  const bmi = calculateBmi(heightCm, weightKg);

  res.json({
    weight: weightKg,
    height: heightCm,
    bmi: bmi,
  });
  return;
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
