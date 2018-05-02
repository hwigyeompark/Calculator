import React, {Component} from 'react';
import Number from "./Number";
import PropTypes from 'prop-types';

class ContactForm extends Component{
    btnClick = (btnTitle) => {
        this.handClick(btnTitle);
    };

    render(){
        return(
            <div className="component-button-panel">
                <div>
                    <Number handClick={this.btnClick} title="C"/><Number handClick={this.btnClick} title="+/-"/><Number handClick={this.btnClick} title="％"/><Number handClick={this.btnClick} title="÷" orange />
                </div>
                <div>
                    <Number handClick={this.btnClick} title="7"/><Number handClick={this.btnClick} title="8"/><Number handClick={this.btnClick} title="9"/><Number handClick={this.btnClick} title="×" orange />
                </div>
                <div>
                    <Number handClick={this.btnClick} title="4"/><Number handClick={this.btnClick} title="5"/><Number handClick={this.btnClick} title="6"/><Number handClick={this.btnClick} title="－" orange/>
                </div>
                <div>
                    <Number handClick={this.btnClick} title="1"/><Number handClick={this.btnClick} title="2"/><Number handClick={this.btnClick} title="3"/><Number handClick={this.btnClick} title="＋" orange/>
                </div>
                <div>
                    <Number handClick={this.btnClick} title="0"/><Number  handClick={this.btnClick}title=""/><Number handClick={this.btnClick} title=""/><Number handClick={this.btnClick} title="＝" orange/>
                </div>
            </div>
        );
    }
}
ContactForm.propTypes = {
    handClick : PropTypes.func
};

export default ContactForm;
