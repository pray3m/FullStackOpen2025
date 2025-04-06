import { useEffect, useState } from "react";
import { fetchAllDiaries } from "./api";
import "./App.css";
import { Diary, Visibility, Weather } from "./types";

function App() {
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [newEntry, setNewEntry] = useState<{
    date: string;
    weather: Weather | "";
    visibility: Visibility | "";
    comment: string;
  }>({
    date: "",
    weather: "",
    visibility: "",
    comment: "",
  });

  useEffect(() => {
    const loadDiaries = async () => {
      const data = await fetchAllDiaries();
      setDiaries(data);
    };

    loadDiaries();
  }, []);

  const handleChange = async (
    e: React.FormEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.currentTarget;
    setNewEntry((prevEntry) => ({
      ...prevEntry,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", newEntry);
  };

  return (
    <>
      <h2>Add new entry</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={newEntry.date}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Visibility:
          <select
            name="visibility"
            value={newEntry.visibility}
            onChange={handleChange}
            required
          >
            <option value="">Select visibility</option>
            {Object.values(Visibility).map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Weather:
          <select
            name="weather"
            value={newEntry.weather}
            onChange={handleChange}
            required
          >
            <option value="">Select weather</option>
            {Object.values(Weather).map((w) => (
              <option key={w} value={w}>
                {w}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Comment:
          <textarea
            name="comment"
            value={newEntry.comment}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <br />
        <button type="submit">Add</button>
      </form>

      <h2>Flight Diarires</h2>
      <div>
        {diaries.length === 0 ? (
          <div>No flight diaries available</div>
        ) : (
          <ul>
            {diaries.map((diary, index) => (
              <li key={index}>
                <h3>
                  {diary.date} &nbsp; #{diary.id}
                </h3>
                <p>visibility : {diary.visibility}</p>
                <p>weather: {diary.weather}</p>
                <p> 💬 {diary.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
