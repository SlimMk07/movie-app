import React, { Component } from 'react';
import {CircleLoader} from 'react-spinners';

const LoadingHoc = (WrappedComponent) => {
    return class LoadingHoc extends Component {
        render() { 
        return this.props.isLoading? <CircleLoader className='loader' sizeUnit={"px"} size={100} color={'red'} loading={this.props.isLoading} /> : <WrappedComponent {...this.props}/>
        }
    }
}   

export default LoadingHoc;
