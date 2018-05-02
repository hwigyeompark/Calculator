import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Number extends Component{
    btnClick = () => {
        this.props.handClick(this.props.title);
    };

    render(){
        const className = [
            "component-button",
            this.props.orange ? "orange" : "",
            this.props.wide ? "wide" : "",
        ];

        return(
            <div className={className.join("").trim()}>
                <button onClick={this.btnClick} style={{ width:'50px', height:'35px'}}>{this.props.title}</button>
            </div>
                );
    }
}
Number.propTypes = {
    name : PropTypes.string,
    orange : PropTypes.bool,
    wide : PropTypes.bool,
    handClick : PropTypes.func
};

export default Number;
