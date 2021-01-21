import { BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import Home from './containers/Home'
import Dashboard from './containers/Dashboard'
import Login from './components/Login'
import Signup from './components/Signup'


const App = () => {
  const [user, setUser] = useState({})

  const handleLogin = (user) => {
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      fetch(`http://localhost:3000/api/v1/auto_login`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        setUser(data)
        console.log(data)
      })
    }
  }, [])

  const handleAuthClick = () => {
    const token = localStorage.getItem('token')
    fetch(`http://localhost:3000/api/v1/user_is_authed`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  const history = useHistory();
  return (
    <div className="App">
      <Router>
        <Switch >
          <Route exact path="/dashboard" component={ Dashboard } history={history}/>
          <Route exact path='/login' render={(props) => <Login {...props} handleLogin={ handleLogin } history={history}/>} />
          <Route exact path="/signup" component= { Signup } history={history}/>
          <Route exact path="/" component={ Home } history={history}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
