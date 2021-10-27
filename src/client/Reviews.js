import React, {useEffect} from 'react';
import {getReviews} from "./Utils";

function Reviews(props) {
    const [reviews, setReviews] = React.useState([]);
    useEffect(() => {
        getReviews(props.match.params.id, setReviews);
    }, []);
    return (
        <main>
            <div className="container mt-5 mb-5">
                <div className="row g-2">
                {
                    reviews ? reviews.map((review, index) =>
                    <div  key={index} className="col-md-4">
                        <div className="card p-3 text-center px-4">
                            <div className="user-image">
                                <img src="" className="rounded-circle" width="80"/>
                            </div>
                            <div className="user-content">
                                <h5 className="mb-0">{review.mail_id}</h5>
                                <span>{review.title}</span>
                                <p>{review.description}</p>
                            </div>
                            <div className="ratings">
                            {Array(parseInt(review.stars)).fill(null).map((value, index) => (
                                <i key={index} className="fa fa-star"/>
                            ))}
                            </div>
                        </div>
                    </div>): <p>No Reviews</p>}
                </div>
            </div> 
        </main>
    );
}
export default Reviews;
