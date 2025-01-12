import { z } from "zod";
import { newEntrySchema } from "./utils";

export interface Diagnoses {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
}

export type NewPatientEntry = z.infer<typeof newEntrySchema>;

export interface PatientEntry extends NewPatientEntry {
  id: string;
}
