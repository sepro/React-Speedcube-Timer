import {expect} from 'chai';

import results from '../reducers/results.js';
import current_time from '../reducers/current_time.js';

describe("reducers/results.js", () => {
  it("should be able to handle ADD_RESULT", () => {
    var defaultState = [];
    var actionAdd = {
      type: 'ADD_RESULT',
      data: 100
    };

    var newState = results(defaultState, actionAdd) ;
    expect(newState[0]).to.equal(100);
  });
});


describe("reducers/current_time.js", () => {
  it("should be able to handle INCREASE", () => {
    var defaultState = 100;
    var actionIncrease = {
      type: 'INCREASE',
      data: 100
    };

    var newState = current_time(defaultState, actionIncrease) ;
    expect(newState).to.equal(200);
  });
  it("should be able to handle RESET", () => {
    var defaultState = 100;
    var actionReset = {
      type: 'RESET',
      data: 100
    };

    var newState = current_time(defaultState, actionReset) ;
    expect(newState).to.equal(0);
  });
});
