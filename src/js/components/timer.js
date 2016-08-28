import React from "react";

class Timer extends React.Component {

  render() {
    return (
      <div>
          { this.props.times.map((time,i ) => {
              return <p>{ time }</p>;
          })}
      </div>
    );
  }
}

export default Timer