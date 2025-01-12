import { Response, Router } from "express";
import patientsService from "../services/patientsService";
import toNewPatientEntry from "../utils";
import { PatientEntry } from "../types";

const router = Router();

router.get("/", (_req, res: Response<PatientEntry[]>) => {
  const patients = patientsService.patientEntries;
  res.status(200).json(patients);
});

router.post("/", (req, res) => {
  const newPatientEntry = toNewPatientEntry(req.body);
  const addedPatient = patientsService.addPatient(newPatientEntry);
  res.json(addedPatient);
});

export default router;
