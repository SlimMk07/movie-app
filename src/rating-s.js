import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class Rating extends React.Component {
    constructor() {
        super();

        this.state = {
            rating: 1
        };
    }

    onStarClick(nextValue,) {
        this.setState({ rating: nextValue },()=>{ this.props.getRating(this.state.rating) });
    }

    render() {
        const { rating } = this.state;

        return (
            <div className="col-lg-4 rating-filter">
                <span className="rating-filter-text">Minimum rating: {rating}</span>
                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                />
            </div>
        );
    }
}

export default Rating;