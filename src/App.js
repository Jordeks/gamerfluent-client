import { BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import Home from './containers/Home'
import Dashboard from './containers/Dashboard'


const App = () => {
  const history = useHistory();
  return (
    <div className="App">
      <Router>
        <Switch >
          <Route exact path="/dashboard" component={ Dashboard } history={history}/>
          <Route exact path="/" component={ Home } history={history}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
