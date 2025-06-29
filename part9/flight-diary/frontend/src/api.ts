import axios from "axios";
import { DiariesResponse, Diary, DiaryEntry } from "./types";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const fetchAllDiaries = async (): Promise<DiariesResponse> => {
  try {
    const res = await apiClient.get<DiariesResponse>("/diaries");
    return res.data;
  } catch (error) {
    console.error("Error fetching diaries", error);
    throw new Error("Failed to fetch diaries.");
  }
};

export const createDiaryEntry = async (
  newEntry: DiaryEntry
): Promise<Diary> => {
  try {
    const res = await apiClient.post<Diary>("/diaries", newEntry);
    return res.data;
  } catch (error) {
    console.error("Error creating entry", error);
    throw new Error("Failed to create entry.");
  }
};
