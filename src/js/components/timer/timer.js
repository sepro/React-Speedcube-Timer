import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import dateFns from 'date-fns';


class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {running: false, last_time: new Date(), last_action: 'none'};
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

    if (this.state.last_action == 'stop') {
        /*
            Timer was stopped, reset before starting
        */
        this.props.reset_time()
    }

    this.setState({...this.state, running: true, last_time: new Date(), last_action: 'start'}, () => {this._increase_time()});
  }

  _stop = (ev) => {
    ev.preventDefault();

    if (this.state.last_action == 'start')
    {
        /*
            Timer is running, update time before stopping
        */
        const current_time = new Date();
        const interval = dateFns.differenceInMilliseconds(current_time, this.state.last_time);

        this.props.increase_time(interval);
    }

    if (this.state.last_action != 'stop')
    {
        /*
            Timer is running or paused, add time to results
        */
        this.setState({...this.state, running: false, last_action: 'stop'}, () => {this.props.add_result(this.props.current_time)});
    }
  }

  _pause = (ev) => {
    ev.preventDefault();

    const current_time = new Date();
    const interval = dateFns.differenceInMilliseconds(current_time, this.state.last_time);

    this.props.increase_time(interval);

    this.setState({...this.state, running: false, last_action: 'pause'});
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
            <ReactCSSTransitionGroup component="div" transitionName={ this.state.last_action } transitionEnterTimeout={300} transitionLeave={false}>
              <span
			    key={ this.state.last_action }
				className= { this.state.last_action + "-icon" } >

			  </span>
            </ReactCSSTransitionGroup>
          </div>
          <div className="timer-controls">
            <button className="button play-button" onClick={ this._start } disabled={ this.state.running } /> <button className="button pause-button" onClick={ this._pause } disabled={ !this.state.running } /> <button className="button stop-button" onClick={ this._stop } />
          </div>
      </div>
    );
  }
}

export default Timer