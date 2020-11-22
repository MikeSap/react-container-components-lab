import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'uL30J5JvWFO6KYKwMVTj2GHeHG0dmymp'
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='
const END_URL =  `api-key=${NYT_API_KEY}`

class SearchableMoviewReviewsContainer extends Component {
    
    state = {
        searchTerm: '',
        reviews: []
      };
    
      handleSearchInputChange = event =>
        this.setState({ searchTerm: event.target.value });
    
      handleSubmit = event => {
        event.preventDefault()
        debugger
        fetch(BASE_URL.concat(this.state.searchTerm, END_URL))
          .then(res => res.json())
          .then(console.log)
      };
    
      render() {
        return (
          <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
              <label>Search Movie Reviews</label>
              <input
                id="search-input"
                type="text"
                style={{ width: 300 }}
                onChange={this.handleSearchInputChange}
              />
              <button type="submit">Submit</button>
            </form>
            {typeof this.state.reviews === 'object' &&
              this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
            <MovieReviews reviews={this.state.reviews} />
          </div>
        );
      }
    }
 
export default SearchableMoviewReviewsContainer;