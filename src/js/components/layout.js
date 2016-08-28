import React from "react";

import Timer from './timer'
import Results from './results'

export default class Layout extends React.Component {

  render() {
    return (
      <div>
        <Timer {...this.props} />
        <Results {...this.props} />
      </div>
    );
  }
}