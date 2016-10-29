import {expect} from 'chai';

import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Results from '../../components/results/results.js';

function setup() {
    let props = {
        results: [100, 200]
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<Results {...props} />);
    let output = renderer.getRenderOutput();

    return {props, output, renderer}
}

describe('Results component', () => {
    it('should render correctly', () => {
        const { props, output } = setup();

        expect(output.type).to.equal('div');
    });
});