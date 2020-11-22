import React from 'react';

const MovieReviews = (props) => {
    return (
        <div>
            {props.reviews.map(review => {
                return <div>
                    <h3>{review.headline}</h3>
                    {review.multimedia ? 
                    <img src={review.multimedia.src} alt="movie poster"/> :
                    <p>This movie has no image.</p>}  
                    <p>{review.summary_short}</p>                   
                    </div>
            })}
        </div>
    )
}

MovieReviews.defaultProps = {
    reviews: []
  };

export default MovieReviews