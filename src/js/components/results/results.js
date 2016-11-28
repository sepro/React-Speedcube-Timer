import React from 'react';
import FlipMove from 'react-flip-move';

import dateFns from 'date-fns'

function compareNumbers(a, b) { return a.time - b.time; }

class Results extends React.Component {

  _format_time = (t) => {
    var time = dateFns.format(t, "mm:ss");
    var msec = dateFns.format(t, "SS");

    if (msec.length < 2) {
      return time + '.0' + msec;
    } else {
      return time + '.' + msec;
    }


  }

  _title = (n) => {
    if (n === 0) {
        return "No results yet"
    } else if ( n === 1) {
        return "Best result"
    } else if (n < 5) {
        return "Best " + n + " results"
    } else {
        return "Best 5 results"
    }
  }

  render() {
    const results = this.props.results;
    return (
      <div className="results">
      <strong>{ this._title(results.length) }</strong>
      <FlipMove easing="cubic-bezier(0, 0.7, 0.8, 0.1)">
          { results.sort(compareNumbers).slice(0,5).map((result) => {
              return <div key={ result.time + '_' + result.id }><p>{ this._format_time(result.time) }</p></div>;
          })}
      </FlipMove>
      </div>
    );
  }
}

export default Results