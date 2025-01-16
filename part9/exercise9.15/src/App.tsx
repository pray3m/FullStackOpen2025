import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

interface CoursePart {
  name: string;
  exerciseCount: number;
}

const App = () => {
  const courseName = "Half Stack application development";

  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
    },
  ];

  const totalExercises = courseParts.reduce(
    (sum, part) => sum + part.exerciseCount,
    0
  );

  return (
    <div>
      <Header name={courseName} />

      <Content courses={courseParts} />

      <Total total={totalExercises} />
    </div>
  );
};

export default App;
