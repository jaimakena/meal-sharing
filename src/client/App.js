import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import Meals from "./Meals";
import MealDetails from "./MealDetails";
import './App.css';

function App() {
  return (
      <div>
      <div className="row">
        <div className="main">
      <Header />
      <br />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/meals" component={Meals}/>
        <Route path="/meals/:id" render={(props) => <MealDetails {...props}/>}/>
      </Switch>
      <Footer />
      </div>
      </div>
    </div>
  );
}

export default App;
