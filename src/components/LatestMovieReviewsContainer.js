import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LastestMovieReviewContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            reviews: []
         }
    }

    componentDidMount(){
        fetch(URL)
        .then(resp => resp.json())
        .then(({results}) => this.setState({reviews: results}))
    }

    render() { 
        return ( 
            <div className='latest-movie-reviews'>
                <h2>The latest reviews:</h2>
                <div className='review-list'>
                    <MovieReviews reviews={this.state.reviews} />
                </div>
            </div>
         );
    }
}

export default LastestMovieReviewContainer;