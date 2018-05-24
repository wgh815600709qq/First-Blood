import {getCounter} from '../Actions/counter.js'
import Index from '../../page/index/index.jsx'
import { connect } from 'react-redux'
// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    getCounter: () => dispatch(getCounter),
  }
}

// Connected Component
const newIndex = connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)

export default newIndex
