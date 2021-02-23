import React from 'react'
import reviews from '../images/reviews.png'

 function ReviewsPage() {
    return (
        <div>
        <h2 className="reviews-title">REVIEWS</h2>
        <img className="reviews-img" src={reviews} alt="reviews" />
        </div>
    )
}

export default ReviewsPage;
