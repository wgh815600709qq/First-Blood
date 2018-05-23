import React, { Component } from 'react';
import './error.less';
import {Link} from 'react-router-dom'
import {Button} from 'antd'
class Errors extends Component {
  render() {
    return (
      <div className="Error">
        <p className="Error-intro">
          404 Page No Found
        </p>
        <Button type="primary"><Link to="/index">返回主页</Link></Button>
      </div>
    );
  }
}

export default Errors;
