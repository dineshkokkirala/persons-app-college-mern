import {
  GET_PERSONS,
  ADD_PERSON,
  DELETE_PERSON,
  UPDATE_PERSON,
  PERSON_ERROR,
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_PERSONS:
      return {
        ...state,
        persons: action.payload,
      };
    case PERSON_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
