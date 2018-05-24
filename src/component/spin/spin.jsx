import {Spin} from 'antd'
import React, { Component } from 'react';
import './spin.less';

class NewSpin extends Component {
  render() {
    const { loading } = this.props
    console.log('loading``````', loading)
    return (
      <div className="Spin-wrapper">
        {loading ? <Spin/> : ''}
      </div>
    );
  }
}

export default NewSpin;
