import { Router } from "express";
import diagnosesService from "../services/diagnosesService";

const router = Router();

router.get("/", (_req, res) => {
  const diagnoses = diagnosesService.getEntries();
  res.status(200).json(diagnoses);
});

router.post("/", (_req, res) => {
  res.send("saving a diagnoses!");
});

export default router;
