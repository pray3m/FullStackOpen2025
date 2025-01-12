import { v1 as uuid } from "uuid";
import patients from "../../data/patients";
import { NewPatientEntry, PatientEntry } from "../types";
import toNewPatientEntry from "../utils";

const id = uuid();

const patientEntries: PatientEntry[] = patients.map((obj) => {
  const newPatientEntry = toNewPatientEntry(obj);
  const object: PatientEntry = {
    ...newPatientEntry,
    id: obj.id,
  };
  return object;
});

const addPatient = (entry: NewPatientEntry): PatientEntry => {
  const newPatient = {
    id,
    ...entry,
  };
  patients.push(newPatient);
  return newPatient;
};

export default { patientEntries, addPatient };
