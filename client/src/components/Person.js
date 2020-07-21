import React, { useContext } from "react";
import PersonContext from "../context/personContext";

const Person = ({ person }) => {
  const personContext = useContext(PersonContext);
  const { persons, deletePerson } = personContext;
  const handleDelete = () => {
    deletePerson(person._id);
  };
  return (
    <div className="card p-4">
      <h2>
        {person.firstname} {person.lastname}
      </h2>
      <button className="btn btn-primary mb-3">Edit</button>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Person;
