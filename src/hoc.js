import React, { Component } from 'react';

const LoadingHoc = (WrappedComponent) => {
    return class LoadingHoc extends Component {
        render() { 
        return this.props.isLoading? <h1>LOADING...</h1>: <WrappedComponent {...this.props}/>        
        }
    }
}   

export default LoadingHoc;
