import React from "react";
import { CoursePart } from "../types";
import Part from "./Part";

interface Props {
  parts: CoursePart[];
}

const Content: React.FC<Props> = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </div>
  );
};

export default Content;
