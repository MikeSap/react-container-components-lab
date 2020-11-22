import React from 'react';

const MovieReviews = (props) => {
    return (    
        <div>
            {props.reviews.map(review => {
                return <div>
                    <h3>{review.headline}</h3>
                    <img src={review.multimedia.src} alt="movie poster"/>
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