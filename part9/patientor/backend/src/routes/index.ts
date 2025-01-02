import { Request, Response, Router } from "express";
import diagnosesRoutes from "./diagnoses";

const router = Router();

router.get("/ping", (_req: Request, res: Response) => {
  res.send(" 🏓 pong!");
});

router.use("/diagnoses", diagnosesRoutes);

export default router;
