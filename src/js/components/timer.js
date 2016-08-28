import React from "react";

import dateFns from 'date-fns';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {running: false};
  }

  _increase_time = () => {
    if (this.state.running) {
      this.props.increase_time(100)
      var t = setTimeout(this._increase_time, 100);
    }
  }

  _start = (ev) => {
    ev.preventDefault();

    this.setState({running: true, start: new Date()}, () => {this._increase_time()});
  }

  _stop = (ev) => {
    ev.preventDefault();

    var stop = new Date();

    this.setState({running: false});
    this.props.add_time(this.props.current_time);
    console.log(dateFns.differenceInMilliseconds(stop, this.state.start));
  }

  _reset = (ev) => {
    ev.preventDefault();
    this.setState({running: false}, () => {this.props.reset_time()});
  }

  render() {
    return (
      <div>
          <p>{ dateFns.format(this.props.current_time, "mm:ss.SS") }</p>
          <a href="#" onClick={ this._start }>start</a> <a href="#" onClick={ this._reset }>reset</a> <a href="#" onClick={ this._stop }>stop</a>
      </div>
    );
  }
}

export default Timer