import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';


class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            rating: 1
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    onStarClick(nextValue,) {
        this.setState({ rating: nextValue },);
    }
    render() {
        const { rating } = this.state;
        return (
            <div>
                <Button className='add-button' color="secondary" onClick={this.toggle}>+</Button>
                <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                    toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add New Movie</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup row>
                                <Label for="exampleTitle" sm={2}>Title</Label>
                                <Col sm={10}>
                                    <Input type="Title" name="Title" id="exampleTitle" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleYear" sm={2}>Year</Label>
                                <Col sm={10}>
                                    <Input type="Year" name="Year" id="exampleYear" />
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
                                    <Input type="textarea" name="text" id="exampleText" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleFile" sm={2}>File</Label>
                                <Col sm={10}>
                                    <Input type="file" name="file" id="exampleFile" />
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Save</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Add;

