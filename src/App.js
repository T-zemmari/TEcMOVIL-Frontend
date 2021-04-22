import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './Containers/Home/Home';
import Register from './Containers/Register/Register';
import './App.css';
import Login from './Containers/Login/Login';
import MySpace from './Containers/Myspace/Myspace';
import Profile from './Containers/Profile/Profile';


function App() {
  return (

    <div className="App">
      
      <BrowserRouter>

      
        <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/register' exact component={Register}/>
         <Route path='/login' exact component={Login}/>
         <Route path='/myspace' exact component={MySpace}/>
         <Route path="'/prpfile" exact component={Profile}/>
         

        </Switch>
      
      
      </BrowserRouter>

      
    </div>
  );
}

export default App;
