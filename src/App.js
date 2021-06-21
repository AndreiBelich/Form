import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "components/pages/HomePage";
import LogInPage from "components/pages/LogInPage";
import SignUpPage from "components/pages/SignUpPage";
import ForgotPage from "components/pages/ForgotPage";

function App() {
  return (
    <BrowserRouter>
       <Switch>
         <Route exact path="/" component={HomePage}/>
         <Route path="/login" component={LogInPage}/>
         <Route path="/signup" component={SignUpPage}/>
         <Route path="/forgot" component={ForgotPage} />
       </Switch>
    </BrowserRouter>
  );
}

export default App;
