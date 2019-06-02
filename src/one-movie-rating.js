import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class Rating1 extends React.Component {

    render() {
        const { rating } = this.props;

        return (
            <div>
                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={rating}
                    editing={false}
                />
            </div>
        );
    }
}

export default Rating1