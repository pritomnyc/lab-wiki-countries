import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import countriesList from './countries.json';
import { Switch, Link, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      {/* <Link to="/">Navbar</Link>
        <Link to="/countries-list">Country Lists</Link>
        <Link to="/country-details">Country Details</Link> */}

      <Navbar />

      <div>
        <CountriesList />
      </div>

      <Switch>
        <Route
          exact
          path="/country/:dynamicId"
          render={(props) => <CountryDetails {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
