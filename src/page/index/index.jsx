import React, { Component } from 'react';
import './index.less';
import {Link} from 'react-router-dom'
import {Button} from 'antd'
class Index extends Component {
  constructor (props) {
    super(props);
    this.logger = this.logger.bind(this);
  }
  render() {
    const { value } = this.props
    return (
      <div className="index">
        <p className="index-intro">
          Page-Index
          当前计数器的值{value}
        </p>
        <Button><Link to="/count">Go Counter</Link></Button>
        <Button onClick={this.logger} data-value={value}>获取当前的计数器的值</Button>
      </div>
    );
  }
  logger(e) {
    console.log('counter', e.target.dataset.value)
  }
}


export default Index;
