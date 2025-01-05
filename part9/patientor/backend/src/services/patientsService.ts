import patients from "../../data/patients";
import { PublicPatient } from "../types";

const getEntries = (): PublicPatient[] => {
  return patients.map(({ dateOfBirth, gender, id, name, occupation }) => ({
    name,
    id,
    gender,
    dateOfBirth,
    occupation,
  }));
};

const addPatients = () => {
  return null;
};

export default { getEntries, addPatients };
