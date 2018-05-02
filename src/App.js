import React, { Component } from 'react';
import ContactForm from './Component/ContactForm';
import Display from "./Component/Display";
import calculate from "./Component/calculate";

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        total : null,
        next : null,
        operation : null,
      };
  }

  btnClick = (btnTitle) => {
    this.setState(calculate(this.state, btnTitle));
  }

  render() {
    return (
      <div  className="component-app" style={{margin:'0 auto', width:'30%', height:'150px'}}>
          <Display value={this.state.next || this.state.total || '0'} />
          <ContactForm handClick={this.btnClick}/>
      </div>
    );
  }
}

export default App;
