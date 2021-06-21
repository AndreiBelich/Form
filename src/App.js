import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "components/pages/Home";
import LogIn from "components/pages/LogIn";
import SignUp from "components/pages/SignUp";

function App() {
  return (
    <BrowserRouter>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/login" component={LogIn}/>
         <Route path="/signup" component={SignUp}/>
       </Switch>
    </BrowserRouter>
  );
}

export default App;

/**
 *        <div>App</div>
       <ul>
         <Link to="/">Home</Link>
         <Link to="/login">Login</Link>
         <Link to="/signup">SignUp</Link>
       </ul>
 */
