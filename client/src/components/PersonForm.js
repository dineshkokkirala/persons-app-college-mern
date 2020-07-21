import React, { useState, useContext } from "react";
import PersonContext from "../context/personContext";

const PersonForm = () => {
  const personContext = useContext(PersonContext);

  const { addPerson, persons } = personContext;
  const [person, setPerson] = useState({
    firstname: "",
    lastname: "",
    errors: {},
  });
  const { firstname, lastname, errors } = person;

  const onChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      firstname,
      lastname,
    };
    //console.log(newPerson);
    addPerson(newPerson);
    setPerson({
      firstname: "",
      lastname: "",
      errors: {},
    });
  };

  return (
    <div>
      <h1>Add a Person to List</h1>
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
          />
          <label htmlFor="lastname">LastName</label>
          <input
            type="text"
            placeholder="LastName"
            onChange={onChange}
            name="lastname"
            value={lastname}
            className="form-control"
          />
        </div>

        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default PersonForm;
