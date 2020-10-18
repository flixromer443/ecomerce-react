import React from 'react';
import LabelBottomNavigation from './Components/Nav';
import DenseAppBar from './Components/Header';
import Home from './Pages/Home';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import './Styles/App.css';
import Login from './Pages/Login';
import Registro from './Pages/Registro';
import Detalle from './Pages/Detalle';



function App() {
 
  return (
    <Router>
      <div className="App">
      <DenseAppBar/>
        
        <Route exact path="/" component={Home} />
        <Route path="/Pages/Login" component={Login} />
        <Route path="/Pages/Registro" component={Registro} />
        <Route path="/Pages/Detalle/:id" component={Detalle} />
      <LabelBottomNavigation />

      </div>
    </Router>
  );
}

export default App;
