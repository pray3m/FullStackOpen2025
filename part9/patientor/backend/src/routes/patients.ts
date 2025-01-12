import { NextFunction, Request, Response, Router } from "express";
import { z } from "zod";
import patientsService from "../services/patientsService";
import { NewPatientEntry, PatientEntry } from "../types";
import { newEntrySchema } from "../utils";

const router = Router();

router.get("/", (_req, res: Response<PatientEntry[]>) => {
  const patients = patientsService.patientEntries;
  res.status(200).json(patients);
});

const newPatientParser = (req: Request, _res: Response, next: NextFunction) => {
  try {
    newEntrySchema.parse(req.body);
    next();
  } catch (error) {
    next(error);
  }
};

const errorMiddleware = (
  error: unknown,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof z.ZodError) {
    res.status(400).send({ error: error.issues });
  } else {
    next(error);
  }
};

router.post(
  "/",
  newPatientParser,
  (
    req: Request<unknown, unknown, NewPatientEntry>,
    res: Response<PatientEntry>
  ) => {
    const addedPatient = patientsService.addPatient(req.body);
    res.json(addedPatient);
  }
);

router.use(errorMiddleware);

export default router;
