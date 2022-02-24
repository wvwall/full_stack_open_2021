import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

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
