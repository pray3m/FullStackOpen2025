/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Response, Router } from "express";
import patientsService from "../services/patientsService";
import { PublicPatient } from "../types";

const router = Router();

router.get("/", (_req, res: Response<PublicPatient[]>) => {
  const patients = patientsService.getEntries();
  res.status(200).json(patients);
});

router.post("/", (req, res) => {
  const { dateOfBirth, gender, name, occupation, ssn } = req.body;
  const addedPatient = patientsService.addPatient(
    dateOfBirth,
    gender,
    name,
    occupation,
    ssn
  );
  res.json(addedPatient);
});

export default router;
