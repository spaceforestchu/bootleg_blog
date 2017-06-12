import React, { Component } from 'react';
import InnerContainer from './InnerContainer';

class Container extends Component {
  render(){
    return (
      <div className="container">
          <div className="row">
            <InnerContainer />
          </div>
      </div>
    )
  }
}

export default Container;
