import users from "../data";

export const initialState = {
  people: users,
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_LIST":
      return {
        ...state,
        people: [],
      };
    case "RESET_LIST":
      return {
        ...state,
        people: users,
      };
    case "REMOVE_PERSON":
      const newPeople = state.people.filter(
        (person) => person.id !== action.payload.id
      );
      return {
        ...state,
        people: newPeople,
      };
    default:
      return state;
  }
};
