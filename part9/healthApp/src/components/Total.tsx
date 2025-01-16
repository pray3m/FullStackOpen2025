import React from "react";

interface Props {
  total: number;
}

const Total: React.FC<Props> = ({ total }) => {
  return <p>Number of exercises {total}</p>;
};

export default Total;
