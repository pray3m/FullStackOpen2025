import express from "express";
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";

const app = express();
app.use(express.json());

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

app.post("/exercises", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;

  if (!daily_exercises || !target) {
    res.status(400).send({ error: "parameters missing" });
    return;
  }

  if (!Array.isArray(daily_exercises)) {
    res.status(400).send({ error: "daily_exercises must be an array" });
    return;
  }

  if (
    daily_exercises.some(
      (exercise) => typeof exercise !== "number" || isNaN(exercise)
    )
  ) {
    res
      .status(400)
      .send({ error: "all values in daily_exercises must be valid numbers" });
    return;
  }

  if (isNaN(Number(target))) {
    res.status(400).send({ error: "target must be a valid number" });
    return;
  }

  const exercises = daily_exercises.map(Number);
  const targetNumber = Number(target);

  const result = calculateExercises(exercises, targetNumber);

  res.send({ result });
  return;
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
