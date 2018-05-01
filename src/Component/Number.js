import React, {Component} from 'react';

class Number extends Component{
    render(){
        return(
            <button>{this.props.title}</button>
        )
    }
}
export default Number;
