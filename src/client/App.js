import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import Meals from "./Meals";
import MealDetails from "./MealDetails";
import ReservationForm from "./ReservationForm";
import Reviews from "./Reviews";
import './assets/css/bootstrap.min.css';
import './App.css';
<script src="../assets/js/bootstrap.bundle.min.js"></script>

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
        <Route exact path="/reservation/:id" render={(props) => <ReservationForm {...props}/>}/>
        <Route path="/reviews/:id" render={(props) => <Reviews {...props}/>}/>
      </Switch>
      <Footer />
      </div>
      </div>
    </div>
  );
}

export default App;
