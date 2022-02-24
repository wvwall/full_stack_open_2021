import { useState, useEffect } from "react";
import axios from "axios";
import personService from "./service/persons";

const promise = axios.get("http://localhost:3001/persons");
console.log(promise);

const App = () => {
  useEffect(() => {
    personService.getAll().then((initialNotes) => {
      setPersons(initialNotes);
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

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    personService.create(personObject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
    });
  };

  const removePerson = (id) => {
    personService.cancel(id).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
    });
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
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filtered.map((person) => (
          <li key={person.id}>
            {person.name} {person.number}
            <button onClick={() => removePerson(person.id)}>delete</button>
          </li>
        ))}
      </ul>
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
