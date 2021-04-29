import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './Containers/Home/Home';
import Register from './Containers/Register/Register';
import './App.css';
import Login from './Containers/Login/Login';
import MySpace from './Containers/Myspace/Myspace';
import Profile from './Containers/Profile/Profile';
import Presupuestos from './Containers/Presupuestos/Presupuestos';
import Repuestos from './Containers/Repuestos/Repuestos';
import Admin from './Containers/Admin/Admin';
import ProductProfile from './Containers/Product-Profile/Product-Profile';
import Tienda from './Containers/Tienda/Tienda';
import Scrolltop from './components/Scrolltop/Scrolltop';


function App() {
  return (

    <div className="App">
      
      <BrowserRouter>

       
        <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/register' exact component={Register}/>
         <Route path='/login' exact component={Login}/>
         <Route path='/myspace' exact component={MySpace}/>
         <Route path='/profile' exact component={Profile}/>
         <Route path='/presupuestos' exact component={Presupuestos}/>
         <Route path='/repuestos' exact component={Repuestos}/>
         <Route path="/admin" exact component={Admin}/>
         <Route path="/product-profile" exact component={ProductProfile}/>
         <Route path="/tienda" exact component ={Tienda}/>
        
        </Switch>
      
      
      </BrowserRouter>

      
    </div>
  );
}

export default App;
