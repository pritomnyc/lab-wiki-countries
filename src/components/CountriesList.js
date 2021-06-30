import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import countries from '../countries.json';

function CountriesList(props) {
  let [countryList, setList] = useState(countries);

  function displayAll() {
    return countryList.map((country) => {
      return (
        <li>
          <Link to={`/country/${country.name.official}`}>
            {country.name.official}
          </Link>
        </li>
      );
    });
  }

  return (
    <div>
      <ul>{displayAll()}</ul>
    </div>
  );
}

export default CountriesList;
