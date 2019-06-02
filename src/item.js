import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap';
import Rating1 from './one-movie-rating'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { movie } = this.props
        return (
        <div className='col-lg-4 one-mv'>
            <Card key={movie.id}>
                <CardImg src={movie.image} alt="Card image cap" />
                <CardBody className='movie-txt'>
                    <div className='movie-txt1'>
                        <CardTitle>{movie.titre}</CardTitle>
                        <CardSubtitle>{movie.year}</CardSubtitle>
                        <Rating1 rating={movie.rating} />
                    </div>
                    <div className='movie-txt2'>
                        <CardText>{movie.description}</CardText>
                    </div>
                </CardBody>
            </Card>
        </div>);
    }
}

export default Item;