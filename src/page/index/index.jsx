import React, { Component } from 'react';
import './index.less';
import {Link} from 'react-router-dom'
import {Button, Tag, notification} from 'antd'
import axios from '../../utils/axios.js'
class Index extends Component {
  constructor (props) {
    super(props);
    this.logger = this.logger.bind(this);
    this.requestData = this.requestData.bind(this);
    this.requestData();
    this.state = {
      list: []
    }
  }
  render() {
    const { value } = this.props
    const listItems = this.state.list.map((it,idx)=> 
      <li key={it.code}>
        <Tag color={ idx % 3 === 0 
          ? 'magenta' 
          : idx % 3 === 1
            ? 'orange'
            : 'purple'
        }>{it.name}</Tag>
      </li>
    )
    return (
      <div className="index">
        <p className="index-intro">
          Page-Index
        </p>
        <div>当前计数器的值{value}</div>
        <h4>
          Boss接口返回行业数据：
        </h4>
        <ul>
          {listItems}
        </ul>
        <Button className="ml-20"><Link to="/count">Go Counter</Link></Button>
        <Button className="ml-20"><Link to="/calculator">网页版计算器</Link></Button>
        <Button className="ml-20" type="primary" onClick={this.logger} data-value={value}>获取当前的计数器的值</Button>
      </div>
    );
  }
  logger(e) {
    console.log('counter', e.target.dataset.value)
    notification.open({
      message: '当前的计数器的值为',
      description: e.target.dataset.value,
    });
  }
  requestData() {
    axios.request({"url": "/common/data/oldindustry.json"}).then(res => {
      console.log('res', res)
      this.setState({
        list: res.data
      })
    }).catch(err => {
      console.log('err', err)
    })
  }
}


export default Index;
