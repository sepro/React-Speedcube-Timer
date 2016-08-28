import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as timesActions from './actions/times';

import Layout from './components/layout';

function mapStateToProps(state) {
    return {
        times: state.times
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(timesActions, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Layout);

export default App;