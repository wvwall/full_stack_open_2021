import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    console.log("effect");
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log("promise fulfilled");
      setCountries(response.data);
      console.log(response.data);
    });
  }, []);

  const [countries, setCountries] = useState([]);

  const [filterCountries, setFilterCountries] = useState();

  const handlerFilter = (e) => {
    setFilterCountries(e.target.value);
  };

  const filtered = !filterCountries
    ? countries
    : countries.filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(filterCountries.toLowerCase())
      );

  return (
    <div>
      <h2>Countries</h2>
      <form>
        <div>
          search country: <input onChange={handlerFilter} />
        </div>
        <div></div>
      </form>
      {filtered.length >= 10 && (
        <h3>Too many matches, specify another filter</h3>
      )}
      {filtered.length <= 10 && filtered.length !== 1 && (
        <ul>
          {filtered.map((country) => (
            <li key={country.name.common}>{country.name.common}</li>
          ))}
        </ul>
      )}
      {filtered.length === 1 && (
        <ul>
          {filtered.map((country) => (
            <>
              <li key={country.name.common}>Capital: {country.capital[0]}</li>
              <li key={country.name.common}>Area: {country.area}</li>
              <li key={country.name.common}>Flag:{country.flag}</li>
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
