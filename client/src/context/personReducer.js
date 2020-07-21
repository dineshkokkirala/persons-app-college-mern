import {
  GET_PERSONS,
  ADD_PERSON,
  DELETE_PERSON,
  UPDATE_PERSON,
  PERSON_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_PERSONS:
      return {
        ...state,
        persons: action.payload,
        loading: true,
      };
    case PERSON_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_PERSON:
      return {
        ...state,
        persons: [action.payload, ...state.persons],
      };
    case DELETE_PERSON:
      return {
        ...state,
        persons: state.persons.filter(
          (person) => person._id !== action.payload
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case UPDATE_PERSON:
      return {
        ...state,
        persons: state.persons.map((person) =>
          person._id === action.payload._id ? action.payload : person
        ),
      };

    default:
      return state;
  }
};
