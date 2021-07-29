// define Dumb Component, Smart Container inside one file!
import React from "react";
import { connect } from "react-redux";

import { actionDecrement } from "../actions";

const Decrement = (props) => <button onClick={props.handleClick}>-</button>;

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => {
      dispatch(actionDecrement());
    }
  }
}

// first argument for connect() is the mapStateToProps function however we don't have it 
export default connect(null, mapDispatchToProps)(Decrement);
