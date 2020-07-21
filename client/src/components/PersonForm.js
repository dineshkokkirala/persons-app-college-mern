import React, { useState, useContext, useEffect } from "react";
import PersonContext from "../context/personContext";

const PersonForm = () => {
  const personContext = useContext(PersonContext);

  const {
    addPerson,

    current,
    updatePerson,
    clearCurrent,
  } = personContext;

  useEffect(() => {
    if (current !== null) {
      setPerson(current);
    } else {
      setPerson({
        firstname: "",
        lastname: "",
        errors: {},
      });
    }
  }, [personContext, current]);

  const [person, setPerson] = useState({
    firstname: "",
    lastname: "",
    errors: {},
  });
  const { firstname, lastname } = person;

  const onChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // const newPerson = {
    //   firstname,
    //   lastname,
    // };
    //console.log(newPerson);
    if (current === null) {
      addPerson(person);
    } else {
      updatePerson(person);
      personContext.clearCurrent();
    }
    setPerson({
      firstname: "",
      lastname: "",
      errors: {},
    });
  };

  return (
    <div>
      <h1>{current === null ? "Add a Person" : "Edit Person"}</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">FirstName</label>
          <input
            type="text"
            placeholder="FirstName"
            onChange={onChange}
            name="firstname"
            value={firstname}
            className="form-control"
            required
          />
          <label htmlFor="lastname">LastName</label>
          <input
            type="text"
            placeholder="LastName"
            onChange={onChange}
            name="lastname"
            value={lastname}
            className="form-control"
            required
          />
        </div>

        <button className="btn btn-success btn-block">
          {current === null ? "Add" : "Update"}
        </button>
        {current && (
          <div className="mt-4">
            <button onClick={clearCurrent} className="btn btn-light btn-block">
              Clear
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default PersonForm;
