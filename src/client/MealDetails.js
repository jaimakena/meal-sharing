import React, {useEffect} from 'react';
import {getMeals, getReservationCount} from "./Utils";
import {NavLink} from "react-router-dom";

function MealDetails(props) {
    const [mealDetails, setMealDetails] = React.useState([]);
    const [reservationCount, setReservationCount] = React.useState(0);
    useEffect(() => {
        getMeals(props.match.params.id, setMealDetails);
        getReservationCount(props.match.params.id, setReservationCount);
    }, []);

    return (
        <section className="py-5 text-center container bg-light">
        <div> {
            mealDetails.length > 0 ? 
            <div>
            <h2 className="mt-4">Meal Details</h2>
            <div className="row mb-3">
                <div className="col-md-4 themed-grid-col">Meal Id</div>
                <div className="col-md-8 themed-grid-col">{mealDetails[0].id}</div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4 themed-grid-col">Title</div>
                <div className="col-md-8 themed-grid-col">{mealDetails[0].title}</div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4 themed-grid-col">Description</div>
                <div className="col-md-8 themed-grid-col">{mealDetails[0].description}</div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4 themed-grid-col">Location</div>
                <div className="col-md-8 themed-grid-col">{mealDetails[0].location}</div>
            </div>
            <div className="row mb-3">
                <div className="col-md-4 themed-grid-col">Price</div>
                <div className="col-md-8 themed-grid-col">{mealDetails[0].price}</div>
            </div>
                {
                parseInt(mealDetails[0].max_reservations) > parseInt(reservationCount) ? 
                <NavLink activeClassName="active" to={`/reservation/${mealDetails[0].id}`}>
                <button type="button" className="btn btn-sm btn-outline-secondary">
                    Make a Reservation
                </button>
                </NavLink>: ''
            } </div> : <p>No Meal Details</p>
        } </div></section>
    );
}

export default MealDetails;
