import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as timesActions from './actions/times';
import * as current_timeActions from './actions/current_time';

import Layout from './components/layout';

function mapStateToProps(state) {
    return {
        times: state.times,
        current_time: state.current_time
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(timesActions, dispatch),
        ...bindActionCreators(current_timeActions, dispatch)
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Layout);

export default App;