import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'uL30J5JvWFO6KYKwMVTj2GHeHG0dmymp'
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
const END_URL =  `api-key=${NYT_API_KEY}&query=`

class SearchableMoviewReviewsContainer extends Component {
    
    state = {
        searchTerm: '',
        reviews: []
      };
    
      handleSearchInputChange = event =>
        this.setState({ searchTerm: event.target.value });
    
      
        handleSubmit = event => {
        event.preventDefault()
        
        let url  = BASE_URL.concat(END_URL,this.state.searchTerm)        
        fetch(url)
          .then(res => res.json())
          .then(({ results }) => this.setState({reviews: results}))
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
            <h2>Movie Review By Search:</h2>
              <div className='review-list'>
                {this.state.reviews.length > 0 ?
                <MovieReviews reviews={this.state.reviews} /> :
                <p>There are currently no results.</p>
                } 
              </div>
          </div>
        );
      }
    }
 
export default SearchableMoviewReviewsContainer;