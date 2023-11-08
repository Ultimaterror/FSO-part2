import React, { useEffect, useState } from "react";
import countriesService from "../services/countries";
import CountriesAllInfo from "./CountriesAllInfo";

export default function CountriesDisplay({ search, setSearch }) {
  const [countries, setCountries] = useState([]);
  const [oneCountry, setOneCountry] = useState(null);

  useEffect(() => {
    countriesService.getAll().then((res) => setCountries(res.data));
  }, []);

  let filter = countries.filter((country) =>
    country.name.common.toLowerCase().includes(String(search).toLowerCase())
  );

  function handleGetOne(name) {
    countriesService.getOne(name).then((res) => {
      setOneCountry(res.data);
      setSearch("");
    });
  }

  switch (true) {
    case search === "" && oneCountry !== null:
      return <CountriesAllInfo country={oneCountry} />;

    case filter.length > 10:
      return <p>Too many countries</p>;

    case filter.length > 1:
      return (
        <div>
          {filter.map((country) => (
            <div>
                {country.name.common}
                <button onClick={() => handleGetOne(country.name.common.toLowerCase())} >Show</button>
                </div>
          ))}
        </div>
      );

      case filter.length === 1:
      return <CountriesAllInfo country={filter[0]} />;
  }
}
