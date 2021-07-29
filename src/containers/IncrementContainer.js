import Increment from '../components/Increment';
import { connect } from 'react-redux';

import { actionIncrement } from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    // translate Redux dispatch into React prop
    handleClick: () => {
      dispatch(actionIncrement());
    }
  }
}

// connect first argument is `mapStateToProps` however, we don't have it therefore, pass `null`
export default connect(null, mapDispatchToProps)(Increment);