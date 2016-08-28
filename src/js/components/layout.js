import React from "react";

import Timer from './timer/timer'
import Results from './results/results'

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