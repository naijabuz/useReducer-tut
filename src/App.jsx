import { useState } from "react";
import users from "./data";
import "./App.css";

function App() {
  const [people, setPeople] = useState(users);

  function remove(id) {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }

  const clear = () => {
    setPeople([]);
  };

  const reset = () => {
    setPeople(users);
  };

  return (
    <main>
      {people.map((user, index) => {
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

      {people.length < 1 ? (
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
