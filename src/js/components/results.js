import React from "react";

class Results extends React.Component {

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

export default Results