import React from "react";

interface Course {
  name: string;
  exerciseCount: number;
}

interface Props {
  courses: Course[];
}

const Content: React.FC<Props> = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <p>
          {course.name} {course.exerciseCount}
        </p>
      ))}
    </div>
  );
};

export default Content;
