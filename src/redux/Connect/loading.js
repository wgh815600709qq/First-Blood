import {isLoading, notLoading} from '../Actions/global-loading.js'
import Spin from '../../component/spin/spin.jsx'
import { connect } from 'react-redux'
// Map Redux state to component props
function mapStateToProps(state) {
  return {
    loading: state.loadingReducer.loading
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    setIsLoading: () => dispatch(isLoading),
    setNotLoading: () => dispatch(notLoading)
  }
}

// Connected Component
const newSpin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Spin)

export default newSpin
