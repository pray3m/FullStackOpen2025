import axios from "axios";
import { DiariesResponse } from "./types";

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
