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
  SET_CURRENT,
  CLEAR_CURRENT,
} from "./types";

const PersonState = (props) => {
  const initialState = {
    persons: [],
    error: null,
    filtered: null,
    loading: false,
    current: null,
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

  const deletePerson = async (id) => {
    try {
      await axios.delete(`/api/person/${id}`);
      dispatch({
        type: DELETE_PERSON,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: PERSON_ERROR,
        payload: err.response.data,
      });
    }
  };

  const setCurrent = (person) => {
    dispatch({
      type: SET_CURRENT,
      payload: person,
    });
  };

  const clearCurrent = (person) => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  const updatePerson = async (person) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(`/api/person/${person._id}`, person, config);
      dispatch({
        type: UPDATE_PERSON,
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
        current: state.current,
        getPersons,
        addPerson,
        deletePerson,
        updatePerson,
        setCurrent,
        clearCurrent,
      }}
    >
      {props.children}
    </PersonContext.Provider>
  );
};

export default PersonState;
