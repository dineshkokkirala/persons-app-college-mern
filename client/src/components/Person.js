import React from "react";

const Person = () => {
  return (
    <div className="card p-4">
      <h2>Person Name</h2>
      <button className="btn btn-primary mb-3">Edit</button>
      <button className="btn btn-danger">Delete</button>
    </div>
  );
};

export default Person;
