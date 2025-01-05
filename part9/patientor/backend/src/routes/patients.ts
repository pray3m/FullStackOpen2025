import { Response, Router } from "express";
import patientsService from "../services/patientsService";
import { PublicPatient } from "../types";

const router = Router();

router.get("/", (_req, res: Response<PublicPatient[]>) => {
  const patients = patientsService.getEntries();
  res.status(200).json(patients);
});

export default router;
