import React from "react";

import Results from './results'

export default class Layout extends React.Component {

  render() {
    return (
      <div>
        <Results {...this.props} />
      </div>
    );
  }
}