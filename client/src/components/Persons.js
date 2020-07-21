import React, { useContext, useEffect } from "react";
import Person from "./Person";
import PersonContext from "../context/personContext";

const Persons = () => {
  const personContext = useContext(PersonContext);

  const { getPersons, persons, loading } = personContext;

  useEffect(() => {
    getPersons();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Persons list</h1>
      <h3>Total Persons: {persons.length}</h3>
      {/* <h3>{persons.length}</h3> */}
      {persons.map((person) => {
        return <Person person={person} key={person._id} />;
      })}
    </div>
  );
};

export default Persons;
