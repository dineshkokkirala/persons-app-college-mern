import React, { useReducer } from "react";
import PersonContext from "./personContext";
import personReducer from "./personReducer";
import axios from "axios";
import {
  GET_PERSONS,
  ADD_PERSON,
  DELETE_PERSON,
  UPDATE_PERSON,
  PERSON_ERROR,
} from "./types";

const PersonState = (props) => {
  const initialState = {
    persons: [],
    error: null,
    filtered: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(personReducer, initialState);

  const getPersons = async () => {
    try {
      const res = await axios.get("/api/person/all");
      dispatch({
        type: GET_PERSONS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PERSON_ERROR,
        payload: err.response.data,
      });
    }
  };

  const addPerson = async (personData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/person", personData, config);
      dispatch({
        type: ADD_PERSON,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PERSON_ERROR,
        payload: err.response.data,
      });
    }
  };

  return (
    <PersonContext.Provider
      value={{
        persons: state.persons,
        filtered: state.filtered,
        error: state.error,
        getPersons,
        addPerson,
      }}
    >
      {props.children}
    </PersonContext.Provider>
  );
};

export default PersonState;
