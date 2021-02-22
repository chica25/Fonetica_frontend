import React from 'react'
import reviews from '../images/reviews.png'

 function ReviewsPage() {
    return (
        <div className="resources-title">
        <h2>REVIEWS</h2>
        <img className="reviews" src={reviews} alt={"reviews image"}/>
        </div>
    )
}

export default ReviewsPage;
