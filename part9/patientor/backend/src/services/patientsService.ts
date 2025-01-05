import { v1 as uuid } from "uuid";
import patients from "../../data/patients";
import { PublicPatient } from "../types";

const id = uuid();

const getEntries = (): PublicPatient[] => {
  return patients.map(({ dateOfBirth, gender, id, name, occupation }) => ({
    name,
    id,
    gender,
    dateOfBirth,
    occupation,
  }));
};

const addPatient = (
  dateOfBirth: string,
  gender: string,
  name: string,
  occupation: string,
  ssn: string
): PublicPatient => {
  const newPatient = {
    id,
    dateOfBirth,
    gender,
    name,
    occupation,
    ssn,
  };
  patients.push(newPatient);
  return newPatient;
};

export default { getEntries, addPatient };
