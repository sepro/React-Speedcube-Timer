import {expect} from 'chai';

import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Timer from '../../components/timer/timer.js';

function setup() {
    let props = {
        current_time: 0
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<Timer {...props} />);
    let output = renderer.getRenderOutput();

    return {props, output, renderer}
}

describe('Timer component', () => {
    it('should render correctly', () => {
        const { props, output } = setup();

        expect(output.type).to.equal('div');
    });
});