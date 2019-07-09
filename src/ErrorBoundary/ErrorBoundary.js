import React, {Component} from 'react';

class ErrorBoundary extends Component{
    state = {
        haserror : false,
        errorMessage : '',
    }

    componentDidCatch(error, info){
        this.setState({
            haserror : true,
            errorMessage : error
        });
    }

    render(){
        if(this.setState.haserror){
            return<h1>{this.State.errorMessage}</h1>;
        }else{
            return this.props.children;
        }
    }
}

export default ErrorBoundary;
