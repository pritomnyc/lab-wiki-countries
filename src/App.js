import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';
import { Switch, Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />

      <CountriesList countries={countries} />

      <Switch>
        <Route
          exact
          path="/country/:dynamicId"
          render={(props) => (
            <CountryDetails {...props} countries={countries} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
