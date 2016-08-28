import React from 'react';
import dateFns from 'date-fns'

function compareNumbers(a, b) { return a - b; }

class Results extends React.Component {

  render() {
    return (
      <div>
          { this.props.times.sort(compareNumbers).slice(0,5).map((time,i ) => {
              return <p>{ dateFns.format(time, "mm:ss.SS") }</p>;
          })}
      </div>
    );
  }
}

export default Results