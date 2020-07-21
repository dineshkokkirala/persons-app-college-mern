import React from "react";

const Person = ({ person }) => {
  return (
    <div className="card p-4">
      <h2>
        {person.firstname} {person.lastname}
      </h2>
      <button className="btn btn-primary mb-3">Edit</button>
      <button className="btn btn-danger">Delete</button>
    </div>
  );
};

export default Person;
