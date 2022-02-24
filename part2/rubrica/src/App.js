import { useState, useEffect } from "react";
import axios from "axios";

const promise = axios.get("http://localhost:3001/persons");
console.log(promise);

const App = () => {
  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState();

  const handlerFilter = (e) => {
    setFilterName(e.target.value);
  };

  const handlerName = (e) => {
    setNewName(e.target.value);
  };
  const handlerNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(newName);
    if (
      persons.some((item) => item.name === newName || item.number === newNumber)
    ) {
      alert("Esiste già questo nome in rubrica");
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
    }
  };

  const filtered = !filterName
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(filterName.toLowerCase())
      );

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          search number: <input onChange={handlerFilter} />
        </div>
        <div>
          <h2>Add</h2>
          name: <input onChange={handlerName} />
        </div>
        <div>
          number: <input onChange={handlerNumber} />
        </div>
        <div>
          <button type="submit" onClick={onSubmit}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filtered.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
