import React, {Component} from 'react';
import Number from "./Number";

class ContactForm extends Component{
    render(){
        return(
            <div>
                <div>
                    <Number title="7"/><Number title="8"/><Number title="9"/><Number title="/"/><br/>
                    <Number title="4"/><Number title="5"/><Number title="6"/><Number title="X"/><br/>
                    <Number title="1"/><Number title="2"/><Number title="3"/><Number title="-"/><br/>
                    <Number title="1"/><Number title="2"/><Number title="3"/><Number title="+"/><br/>
                    <Number title="0"/><Number title="."/><Number title="="/><Number title="9"/><br/>


                </div>
            </div>
        )
    }
}
export default ContactForm;
