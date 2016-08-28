import React from 'react';
import dateFns from 'date-fns'

function compareNumbers(a, b) { return a - b; }

class Results extends React.Component {

  render() {
    return (
      <div>
          { this.props.results.sort(compareNumbers).slice(0,5).map((result,i ) => {
              return <p>{ dateFns.format(result, "mm:ss.SS") }</p>;
          })}
      </div>
    );
  }
}

export default Results