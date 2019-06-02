import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

class Search extends React.Component {
    state = {
        fix: ''
      };
    change = ({ target }) => {
        this.setState({ fix: target.value },()=>{ this.props.getFix(this.state.fix) })
        
      }
    render() {
        return (
            <InputGroup className='col-lg-8'>
                <Input className='input' placeholder='Search' onChange={this.change} />
                <InputGroupAddon addonType="append">
                    <Button color="secondary"><i className="fas fa-search"></i></Button>
                </InputGroupAddon>
            </InputGroup>
        );
    }
}

export default Search;