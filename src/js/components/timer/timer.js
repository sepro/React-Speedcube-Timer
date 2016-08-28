import React from "react";

import dateFns from 'date-fns';


class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {running: false, last_time: new Date()};
  }

  _increase_time = () => {
    if (this.state.running) {
      const current_time = new Date();
      const interval = dateFns.differenceInMilliseconds(current_time, this.state.last_time);

      this.props.increase_time(interval);

      this.setState({...this.state, last_time: current_time}, () => {setTimeout(this._increase_time, 10)});
    }
  }

  _start = (ev) => {
    ev.preventDefault();

    this.setState({...this.state, running: true, last_time: new Date()}, () => {this._increase_time()});
  }

  _stop = (ev) => {
    ev.preventDefault();

    const current_time = new Date();
    const interval = dateFns.differenceInMilliseconds(current_time, this.state.last_time);

    this.props.increase_time(interval);

    this.setState({...this.state, running: false}, () => {this.props.add_result(this.props.current_time)});
  }

  _reset = (ev) => {
    ev.preventDefault();
    this.setState({...this.state, running: false}, () => {this.props.reset_time()});
  }

  _format_time = (t) => {
   var time = dateFns.format(t, "mm:ss");
   var msec = dateFns.format(t, "SS");

   if (msec.length < 2) {
     return time + '.0' + msec;
   } else {
     return time + '.' + msec;
   }


  }

  render() {
    return (
      <div>
          <div className="timer">
            <div className="timer-text">{ this._format_time(this.props.current_time) }</div>
          </div>
          <a href="#" onClick={ this._start }>start</a> <a href="#" onClick={ this._reset }>reset</a> <a href="#" onClick={ this._stop }>stop</a>
      </div>
    );
  }
}

export default Timer