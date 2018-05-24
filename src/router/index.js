import React, {Component} from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from '../redux/Store/index.js'
// 路由页面
import App from '../App.js'
import Index from '../redux/Connect/index.js'
import About from '../page/about/about.jsx'
import Detail from '../page/detail/detail.jsx'
import NotFoundPage from '../page/error/error.jsx'
import Counter from '../redux/Connect/counter.js'
import Spin from '../redux/Connect/loading.js'
import Caculator from '../component/Calculator/calculator.jsx'
class RootRouters extends Component{
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <App>
            <Switch>
              <Route exac path="/index" component={Index}/> {/* 主页 */}
              <Route path="/about" component={About} />
              <Route path="/detail" component={Detail} />
              <Route path="/count" component={Counter} />
              <Route path="/calculator" component={Caculator} />
              <Route path='/404' component={NotFoundPage} /> {/* 404 */}
              <Redirect from='/*' to='/404' />
            </Switch>
            <Spin></Spin>
          </App>
        </HashRouter>
      </Provider>
    );
  }
}

export default RootRouters