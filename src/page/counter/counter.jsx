import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {Button} from 'antd'
class Counter extends Component {
  render() {
    const { value, onIncreaseClick, onResetCounter } = this.props
    return (
      <div>
        <h1>计数器</h1>
        <div>{value}</div>
        <Button onClick={onIncreaseClick}>Increase</Button>
        <Button onClick={onResetCounter}>Reset</Button>
        <Button type="primary"><Link to="/index">返回主页</Link></Button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
  onResetCounter: PropTypes.func.isRequired
}

export default Counter;