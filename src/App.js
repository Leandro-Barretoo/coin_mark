import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Homepage from './components/Homepage';
import Details from './components/Details';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/details">
        <Details />
      </Route>
    </Switch>
  </Router>
);

export default App;
