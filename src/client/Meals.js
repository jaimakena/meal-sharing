import React, {useEffect} from 'react';
import {getMeals, pics} from "./Utils";
import {NavLink} from "react-router-dom";

function Meals() {
    const [meals, setMeals] = React.useState([]);
    useEffect(() => {
        getMeals(null, setMeals);
    }, []);
    return (
        <main>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                        meals ? meals.map((meal, index) => <div key={index}
                            className="col">
                            <div className="card shadow-sm">
                                <img src={pics[index]} className="mealImage"/>
                                <div className="card-body">
                                    <p className="card-text">
                                        {meal.description}
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <NavLink activeClassName="active"
                                                to={`/meals/${meal.id}`}>
                                                <span className="paddingRight5">
                                                    <button type="button" className="btn btn-primary">View</button>
                                                </span>
                                            </NavLink>
                                            <NavLink activeClassName="active"
                                                to={`/reviews/${meal.id}`}>
                                                <button type="button" className="btn btn-primary">Reviews</button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>) : <p>No Items</p>
                    } </div>
                </div>
            </div>
        </main>
    );
}
export default Meals;
