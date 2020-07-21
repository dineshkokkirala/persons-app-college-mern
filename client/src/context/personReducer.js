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
    default:
      return state;
  }
};
