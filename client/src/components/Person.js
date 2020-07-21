import React, { useContext } from "react";
import PersonContext from "../context/personContext";

const Person = ({ person }) => {
  const personContext = useContext(PersonContext);
  const { deletePerson, setCurrent, clearCurrent } = personContext;
  const handleDelete = () => {
    deletePerson(person._id);
    clearCurrent();
  };
  return (
    <div className="card p-4 mb-2">
      <h2>
        {person.firstname} {person.lastname}
      </h2>
      <button
        className="btn btn-primary mb-3"
        onClick={() => setCurrent(person)}
      >
        Edit
      </button>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Person;
