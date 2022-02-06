import React from "react";
import { useParams } from "react-router-dom";

const Editpost = () => {
  const { id } = useParams();
  return <div>Editpost {id}</div>;
};

export default Editpost;
