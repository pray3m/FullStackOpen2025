import { Request, Response, Router } from "express";
import diagnosesRoutes from "./diagnoses";
import patientsRoutes from "./patients";

const router = Router();

router.get("/ping", (_req: Request, res: Response) => {
  res.send(" 🏓 pong!");
});

router.use("/diagnoses", diagnosesRoutes);
router.use("/patients", patientsRoutes);

export default router;
