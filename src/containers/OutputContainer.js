import Output from '../components/Output';
import { connect } from 'react-redux';  // translate Redux `state` into `props` for my React Component

function mapStateToProps(state) {
  // Translate Redux state into React props using { connect }

  return {
    // key is the prop that React will see, value is for Redux state.  End goal is to provide `state.count` to the `Output` Component (dumb React component).
    // propName seen by React : value-in-state by Redux
    amount: state.count
  }
}

export default connect(mapStateToProps)(Output);  // call connect() pass mapStateToProps() function.  Resulting a immediately calling and passing `Output` component.  This is the "wrapping" react dumb component, `Output` with connection to Redux.  This "Connected Component" then gets exported out.