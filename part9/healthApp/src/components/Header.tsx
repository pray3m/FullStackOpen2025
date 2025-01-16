import React from "react";

interface Props {
  name: string;
}

const Header: React.FC<Props> = ({ name }) => {
  return <h1>{name}</h1>;
};

export default Header;
