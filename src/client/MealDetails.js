import React, {useEffect} from 'react';
import getMeals from "./CommonFunctions";
import ReservationForm from "./ReservationForm";

function MealDetails(props) {
    const [mealDetails, setMealDetails] = React.useState([]);
    const [reservationCount, setReservationCount] = React.useState(0);
    useEffect(() => {
        getMeals(props.match.params.id, setMealDetails);
        getReservationCount(props.match.params.id, setReservationCount);
    }, []);

    return (
        <div> {
            mealDetails.length > 0 ? <div>
                <table>
                    <tbody>
                        <tr>
                            <td className='bold'>Id</td>
                            <td>{
                                mealDetails[0].id
                            }</td>
                        </tr>
                        <tr>
                            <td className='bold'>Title</td>
                            <td>{
                                mealDetails[0].title
                            }</td>
                        </tr>
                        <tr>
                            <td className='bold'>Description</td>
                            <td>{
                                mealDetails[0].description
                            }</td>
                        </tr>
                        <tr>
                            <td className='bold'>Location</td>
                            <td>{
                                mealDetails[0].location
                            }</td>
                        </tr>
                        <tr>
                            <td className='bold'>Price</td>
                            <td>{
                                mealDetails[0].price
                            }</td>
                        </tr>
                    </tbody>
                </table>

                {
                parseInt(mealDetails[0].max_reservations) > parseInt(reservationCount) ? <ReservationForm mealId={
                    mealDetails[0].id
                }/> : ''
            } </div> : <p>No Meal Details</p>
        } </div>
    );
}

export default MealDetails;

function getReservationCount(id, setData) {
    const uri = 'http://localhost:3000/api/reservations/count/' + id;
    fetch(uri).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response.status);
        }
    }).then((data) => {
        if (data) {
            setData(data[0].count);
        }
    });
}
