import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Number extends Component{
    btnClick = () => {
        this.props.handClick(this.props.title);
    };

    render(){
        const className = [
            "component-button"
        ];

        return(
                <button className={className.join("").trim()} onClick={this.btnClick} style={{ width:'50px', height:'35px'}}>{this.props.title}</button>
        );
    }
}
Number.propTypes = {
    name : PropTypes.string,
    handClick : PropTypes.func
};

export default Number;
