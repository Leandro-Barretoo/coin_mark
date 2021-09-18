import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Homepage from './components/Homepage';
import Details from './components/Details';
import Nav from './components/Nav';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Nav display="None" />
        <Homepage />
      </Route>
      <Route path="/details/:country">
        <Nav display="Block" />
        <Details />
      </Route>
    </Switch>
  </Router>
);

export default App;
