import React from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom'
import './App.scss';
import Login from './views/Login/Login';
import {userContext} from './context/userContext'
import userReducer from './reducers/userReducer';
import { userState } from './states/userState';
import Insured from './views/Insured/Insured';


function App() {

  const [value, dispatch] = React.useReducer(userReducer, userState)

  React.useEffect(() => {
    localStorage.setItem('user',JSON.stringify(value))
  }, [value])

  return (
    <userContext.Provider value={{value,dispatch}}>
    <Router>
      <div>
        <Switch>
          <Route path="/seguro" exact component={Insured}/>
          <Route path="/" exact component={Login}/>
          <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
    </userContext.Provider>
  );
}

export default App;
