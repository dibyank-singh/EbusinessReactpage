import React from 'react'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Elocals from './components/Elocals'
import Calculator from './components/Calculator'
import Contact from './components/Contact'
import Navbar from './components/Navbar'



import {Switch , Route, Redirect } from 'react-router-dom'
import Login from './components/Login'

 
function App() {
  return (
    <>
       <Navbar/>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" component={Elocals} />
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/"/>

      </Switch>
      

    </>

  );
}

export default App;
