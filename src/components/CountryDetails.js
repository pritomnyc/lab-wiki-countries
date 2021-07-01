import React, { useState, useEffect } from 'react';
import { Switch, Link, Route } from 'react-router-dom';

function CountryDetails(props) {
  const [country, setCountry] = useState({});

  useEffect(() => {
    let con = props.countries.find(
      (findCountry) => findCountry.cca3 === props.match.params.dynamicId
    );
    setCountry(con);
  }, [props]);

  return (
    <div>
      CountryDetails {props.match.params.dynamicId}
      <div>{props.name}</div>
    </div>
  );
}

export default CountryDetails;
