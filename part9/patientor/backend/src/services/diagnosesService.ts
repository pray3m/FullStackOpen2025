import diagnoses from "../../data/diagnoses";
import { Diagnoses } from "../types";

const getEntries = (): Diagnoses[] => {
  return diagnoses;
};

const addDiagnoses = () => {
  return null;
};

export default { getEntries, addDiagnoses };
