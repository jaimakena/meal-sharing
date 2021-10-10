import React, {useEffect} from 'react';
import getMeals from "./CommonFunctions";
import {NavLink} from "react-router-dom";

function Meals() {
    const [meals, setMeals] = React.useState([]);
    useEffect(() => {
        getMeals(null, setMeals);
    }, []);
    return (
        <div> {
            meals ? meals.map((meal, index) => <div key={index}>
                <NavLink activeClassName="active"
                    to={
                        `/meals/${
                            index + 1
                        }`
                }>
                    <h3>{
                        meal.title
                    }</h3>
                </NavLink>
            </div>) : <p>No Items</p>
        } </div>
    );
}

export default Meals;
