import {increaseCounter, resetCounter} from '../Actions/counter.js'
import Counter from '../../page/counter/counter.jsx'
import { connect } from 'react-redux'
// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.counterReducer.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseCounter),
    onResetCounter: () => dispatch(resetCounter)
  }
}

// Connected Component
const newCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default newCounter
