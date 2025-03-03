import { useEffect, useState } from "react";
import { fetchAllDiaries } from "./api";
import "./App.css";
import { Diary } from "./types";

function App() {
  const [diaries, setDiaries] = useState<Diary[]>([]);

  useEffect(() => {
    const loadDiaries = async () => {
      const data = await fetchAllDiaries();
      setDiaries(data);
    };

    loadDiaries();
  }, []);

  return (
    <>
      <h2>Flight Diarires</h2>
      <div>
        {diaries.length === 0 ? (
          <div>No flight diaries available</div>
        ) : (
          <ul>
            {diaries.map((diary, index) => (
              <li key={index}>
                {" "}
                {diary.id} - {diary.date} {diary.weather} {diary.visibility}{" "}
                {diary.comment}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
