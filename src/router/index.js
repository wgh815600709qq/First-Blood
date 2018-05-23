import React, {Component} from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'

// 路由页面
import App from '../App.js'
import Index from '../page/index/index.jsx'
import About from '../page/about/about.jsx'
import Detail from '../page/detail/detail.jsx'
import NotFoundPage from '../page/error/error.jsx'
class RootRouters extends Component{
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route exac path="/index" component={Index}/> {/* 主页 */}
            <Route path="/about" component={About} />
            <Route path="/detail" component={Detail} />
            <Route path='/404' component={NotFoundPage} /> {/* 404 */}
            <Redirect from='/*' to='/404' />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}

export default RootRouters