import React from 'react';
import dateFns from 'date-fns'

function compareNumbers(a, b) { return a - b; }

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
          { results.sort(compareNumbers).slice(0,5).map((result,i ) => {
              return <p>{ this._format_time(result) } </p>;
          })}
      </div>
    );
  }
}

export default Results