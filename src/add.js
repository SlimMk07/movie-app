import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';


class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false, titre: '', year: 2000, description: '', rating: 1, image: '', invalidFile: false 
        };

        this.toggle = this.toggle.bind(this);
    }
    // save
    saveMovies = () => {
        if (this.state.modal === false)
          this.props.addNewMovie(
            this.state.titre, this.state.year, this.state.rating, this.state.description, this.state.image
          )
      }
    //   update rating
    onStarClick(nextValue,) { this.setState({ rating: nextValue }); }
  toggle = () => {
    this.setState(prevState => ({ modal: !prevState.modal }), () => this.saveMovies()
    )
  }

  //movie informations update
  saveInfos = (e) => {
    e.target.name === 'titre' ? this.setState({ titre: e.target.value }) :
    e.target.name === 'year' ? this.setState({ year: e.target.value }) :
    e.target.name === 'img' ? this.setState({ image: URL.createObjectURL(e.target.files[0]) }) :
    e.target.name === 'description' ? this.setState({ description: e.target.value }) :
      this.setState({ description: e.target.value })
  }

// par defaut modal

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    onStarClick(nextValue,) {
        this.setState({ rating: nextValue },);
    }
    render() {
        const { rating,} = this.state;
        return (
            <div>
                <Button className='add-button' color="secondary" onClick={this.toggle}>+</Button>
                <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                    toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add New Movie</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup row>
                                <Label for="exampletitre" sm={2}>titre</Label>
                                <Col sm={10}>
                                    <Input type="titre" name="titre" id="exampletitre" onChange={this.saveInfos} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleYear" sm={2}>Year</Label>
                                <Col sm={10}>
                                    <Input type="Year" name="year" id="exampleYear" onChange={this.saveInfos} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleRating" sm={2}>Rating</Label>
                                <Col sm={10}>
                                    <StarRatingComponent
                                        name="rate1"
                                        starCount={5}
                                        value={rating}
                                        onStarClick={this.onStarClick.bind(this)}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleText" sm={2}>Description</Label>
                                <Col sm={10}>
                                    <Input type="textarea" name="description" id="exampleText" onChange={this.saveInfos}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleFile" sm={2}>File</Label>
                                <Col sm={10}>
                                    <Input type="file" name="img" id="exampleFile" onChange={this.saveInfos}/>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={ this.toggle}>Save</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Add;

