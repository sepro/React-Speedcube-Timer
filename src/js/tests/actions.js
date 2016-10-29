import {expect} from 'chai';

import * as results from '../actions/results.js';
import * as current_time from '../actions/current_time.js'

describe("actions/results.js", () => {
  it("should be able to add a result", () => {

    var action = results.add_result({'result': 'new_result'});
    expect(action['type']).to.equal('ADD_RESULT');
    expect(action['data']['result']).to.equal('new_result');
  });
});

describe("actions/current_time.js", () => {
  it("should be able to increase the time", () => {

    var action = current_time.increase_time(100);
    expect(action['type']).to.equal('INCREASE');
    expect(action['data']).to.equal(100);
  });
  it("should be able to reset the time", () => {

    var action = current_time.reset_time();
    expect(action['type']).to.equal('RESET');
  });
});