import { useState, useReducer } from "react";
// import users from "./data";
import "./App.css";
import { appReducer, initialState } from "./reducer/globalReducer";
import types from "./reducer/actionTypes";

function App() {
  // const [people, setPeople] = useState(users);
  const [state, dispatch] = useReducer(appReducer, initialState);

  function remove(id) {
    dispatch({ type: types.REMOVE_PERSON, payload: { id } });
    // const newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  }

  const clear = () => {
    dispatch({ type: types.CLEAR_LIST });
    // setPeople([]);
  };

  const reset = () => {
    dispatch({ type: types.RESET_LIST });
    // setPeople(users);
  };

  return (
    <main>
      {state.people.map((user, index) => {
        const { name, id, location } = user;
        return (
          <div key={id}>
            <h2>{`[${index + 1}] ${name}`}</h2>
            <h3>{location}</h3>
            <button type="button" onClick={() => remove(id)}>
              Remove
            </button>
          </div>
        );
      })}

      <hr />

      {state.people.length < 1 ? (
        <button type="button" onClick={reset}>
          Reset List
        </button>
      ) : (
        <button type="button" onClick={clear}>
          Clear List
        </button>
      )}
    </main>
  );
}

export default App;
