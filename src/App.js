import { BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import Header from './components/Header'

const App = () => {
  return (
    <div className="App">
      <Header />
    </div>
  )
}

export default App;
